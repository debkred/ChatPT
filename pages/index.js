import Link from 'next/link';
export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Välkommen till ChatPT</h1>
      <p>Din AI-drivna personliga tränare online.</p>
      <Link href="/profile">Starta din träningsresa</Link>
    </main>
  );
}