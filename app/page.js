import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hi, I'm <strong>Skerdi Velia</strong></h1>
      <p>Welcome to my portfolio website!</p>
      <nav>
        <Link href="/projects">Projects</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </nav>
      <section>
        <h2>About Me</h2>
        <p>
          [A short introduction about yourself, your skills, and interests.]
        </p>
      </section>
    </main>
  );
}