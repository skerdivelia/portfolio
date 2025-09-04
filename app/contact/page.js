import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/projects">Projects</Link>
      </nav>
      <p>
        You can reach me at: <a href="mailto:[your.email@example.com]">[your.email@example.com]</a>
      </p>
    </main>
  );
}