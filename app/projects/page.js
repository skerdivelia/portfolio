import Link from 'next/link';

const projects = [
  {
    name: "E-commerce React App",
    description: "A simple e-commerce site built with React.",
    url: "https://github.com/Skerdi199/react-ecom"
  },
  {
    name: "Next.js Demo",
    description: "A demo project using Next.js.",
    url: "https://github.com/Skerdi199/NextJs"
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
      <ul>
        {projects.map(project => (
          <li key={project.name}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <strong>{project.name}</strong>: {project.description}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}