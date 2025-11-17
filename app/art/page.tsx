"use client";

import { get } from "http";
import styles from "./page.module.css";
import { use, useEffect } from "react";
import { useState } from "react";

const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export default function ArtPage() {
  const [artData, setArtData] = useState<Array<any>>([]);
  const [departmentTitle, setDepartmentTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
  
    async function loadArtData() {
      try {
        const departmentId = "11"; // Example: European Paintings
        const count = 10;
        const departmentResponse = await fetch(BASE_URL + "/departments");
        if (!departmentResponse.ok) {
          throw new Error("Failed to get departments");
        }
        const departmentData = await departmentResponse.json();
        const department = departmentData.departments.find(
          (dep: any) => dep.departmentId.toString() === departmentId);
        if (department) {
          setDepartmentTitle(department.displayName);
        }

        const artObjects = await getArtData(departmentId, count);
        setArtData(artObjects);
      } catch (err : Error | any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadArtData();

  }, []);

  if (loading) {
    return (
    <main className={styles.main}>
      <p>Loading...</p>
    </main>
    );
  }
  else if (error) {
    return (
    <main className={styles.main}>
      <p>Error : {error.message}</p>
    </main>
    );
  } else {
    
    return (
    <main className={styles.main}>
      <h1>Art from Department: {departmentTitle}</h1>
    </main>
  );
  }
}

async function getArtData(departmentId: string, count: number) {
  try {
    const ids = await getIDs(departmentId, count);
    const artData = [];

    for (const id of ids) {
      const objectResponse = await fetch(BASE_URL + "/objects/" + id);
      if (!objectResponse.ok) {
        throw new Error("Failed to fetch art data for ID: " + id);
      }
      const objectData = await objectResponse.json();
      if (objectData) {
        artData.push(objectData);
      }
    }
    return artData;

  } catch (error) {
    console.error("Error fetching art data:", error);
    return [];
  }
}

async function getIDs(departmentId: string, count: number) {
  try {
    const objectsResponse = await fetch(BASE_URL + "/objects?departmentIds=" + departmentId);
    if (!objectsResponse.ok) {
      throw new Error("Failed to fetch object IDs of departmentIds: " + departmentId);
    }
    const objectsData = await objectsResponse.json();

    const objectIDs = objectsData.objectIDs;
    if (!objectIDs || objectIDs.length === 0) {
      return [];
    }
    const selectedIDs: Array<number> = [];
    for (let i = 0; selectedIDs.length < count; i++) {
      const randomIndex = Math.floor(Math.random() * objectIDs.length);
      const randomID = objectIDs[randomIndex];
      if (!selectedIDs.includes(randomID)) {
        selectedIDs.push(randomID);
      }
    }
    return selectedIDs;
  } catch (error) {
    console.error("Error fetching art data:", error);
    return [];
  }
}
