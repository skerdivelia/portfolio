import Link from "next/link"; // Import Next.js Link
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main>
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#0070f3",
          marginBottom: "1.5rem",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        ← Back to Home
      </Link>
      <h1>Contact</h1>
      <p>
        You can reach me at:{" "}
        <a href="mailto:skerdivelia@gmail.com" style={{ textDecoration: 'none', color: '#0070f3' }}>
          📧 <strong>skerdivelia@gmail.com</strong>
        </a>
      </p>
      <div style={{ marginTop: "2rem" }}>
        <h2>Find me also on:</h2>
        <ul style={{ listStyle: "none", padding: 0 , display: "flex", flexDirection: "column", gap: "10px"}}>
          <li>
            <a
              href="https://github.com/Skerdi199"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
            >
              <FaGithub size={24} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/skerdi-velia-344594223/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
            >
              <FaLinkedin size={24} /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}