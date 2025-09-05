import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <ThemeToggle />
      <div style={{ flex: 1}}>
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
        className={styles.profileImage}
      />
    </main>
  );
}