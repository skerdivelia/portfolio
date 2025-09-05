import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "60vh",
        gap: "2rem",
      }}
    >
      <ThemeToggle />
      <div>
        <h1>
          Hi, I'm <strong>Skerdi Velia</strong>
        </h1>
        <p>Welcome to my portfolio website!</p>
        <p>
          Technology has been my passion since childhood. I love exploring new
          tools and building things. Over the years, I’ve worked with different
          technologies and focused on creating user-friendly web applications,
          especially with JavaScript frameworks. I enjoy learning,
          collaborating, and turning ideas into real solutions.
        </p>
        <p>
          Check out my{" "}
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          , <Link href="/projects">Projects</Link> or{" "}
          <Link href="/contact">Contact</Link> me.
        </p>
      </div>
      <img
        src="profile-picture.jpg"
        alt="Skerdi Velia"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        }}
      />
    </main>
  );
}
