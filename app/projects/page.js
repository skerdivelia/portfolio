import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const projects = [
  {
    name: "E-commerce React App",
    description: "A simple e-commerce site built with React.",
    url: "https://github.com/Skerdi199/react-ecom",
    demoUrl: "https://skerdivelia.github.io/portfolio/",
    image: "/vercel.svg"
  },
  {
    name: "Next.js Demo",
    description: "A demo project using Next.js.",
    url: "https://github.com/Skerdi199/NextJs",
    demoUrl: "https://skerdivelia.github.io/portfolio/",
    image: "/vercel.svg"
  }
];

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects.map(project => (
          <li
            key={project.name}
            style={{
              border: '1px solid #eee',
              borderRadius: '8px',
              margin: '1rem 0',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            {project.image && (
              <img src={project.image} alt={project.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
            )}
            <div>
              <strong>{project.name}</strong>: {project.description}
              <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: '#c0c0c0ff' }}>
                   <FaGithub /> Github
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" title="Live Demo" style={{ color: '#0a7cff' }}>
                     <MdOutlineWeb /> Website
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}