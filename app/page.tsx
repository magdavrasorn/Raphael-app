import Image from "next/image";

export default function Home() {
  return (
    <main className="styles.main">
      <h1 className="styles.title">Web Application Assignment</h1>
      <p className="styles.description">
        Select a task below to view the implementation:
      </p>

      <div className="styles.grid">
        {/* Link to Task 1 */}
        <a href="/tic-tac-toe" className="styles.card">
          <h2>Task 1: Tic-Tac-Toe &rarr;</h2>
        </a>

        {/* Link to Task 2 */}
        <a href="/art" className="styles.card">
          <h2>Task 2: Met Museum API &rarr;</h2>
        </a>

        {/* Link to Task 3 */}
        <a href="/design" className="styles.card">
          <h2>Task 3: Figma Design &rarr;</h2>
        </a>
      </div>
    </main>
  );
}