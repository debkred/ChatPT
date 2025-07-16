
'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Välkommen till ChatPT 💪</h1>
      <p>Din AI-drivna personliga tränare – helt anpassad efter dig.</p>
      <button
        onClick={() => router.push('/form')}
        style={{
          marginTop: 20,
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Kom igång
      </button>
    </main>
  );
}
