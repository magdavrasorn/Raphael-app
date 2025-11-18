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
        const departmentId = "11";
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
    // TODO while it is not mentioned in the task description, filter out art objects without images can be good for better user experience
    // One radical solution could be to just remove them: artData = artData.filter((artObject) => artObject.primaryImage && artObject.primaryImage !== "");
    // I wrote these comments just to show that I am aware of this possible improvement
    return (
    <main className={styles.main}>
      <h1>Art from the Department of {departmentTitle}</h1>
      <div className={styles.grid}>
        {artData.map((artObject) => (
          <div key={artObject.objectID} className={styles.card}>
            <h2 className={styles.artTitles}>
              {artObject.title}
            </h2>
            <img className={styles.artImage} src={artObject.primaryImage} alt={artObject.title}/>
            <h3 className={styles.artArtistName}>
              {artObject.artistDisplayName}
            </h3>
            <h4 className={styles.artFurtherInfo}>
              Technic: {artObject.medium} - Art Begin and End Dates: {artObject.objectBeginDate} to {artObject.objectEndDate} - Dimensions: {artObject.dimensions}
            </h4>
          </div>
          ))
        }
      </div>
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
