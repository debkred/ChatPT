'use client';

import { useState } from 'react';

export default function FormPage() {
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Skapa din träningsprofil</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
          <div style={{ marginBottom: 10 }}>
            <label>Mål:</label><br />
            <input value={goal} onChange={(e) => setGoal(e.target.value)} required />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Träningsvana:</label><br />
            <input value={experience} onChange={(e) => setExperience(e.target.value)} required />
          </div>
          <button type="submit" style={{
            marginTop: 10,
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px'
          }}>
            Generera träningsupplägg
          </button>
        </form>
      ) : (
        <div style={{ marginTop: 20 }}>
          <h2>Ditt AI-genererade förslag:</h2>
          <p><strong>Mål:</strong> {goal}</p>
          <p><strong>Träningsvana:</strong> {experience}</p>
          <p>✅ Här kommer ett anpassat träningsupplägg snart (AI-integration).</p>
        </div>
      )}
    </main>
  );
}
