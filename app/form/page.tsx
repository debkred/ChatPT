'use client';
import { useState } from 'react';

export default function FormPage() {
  const [form, setForm] = useState({
    goal: '',
    timeframe: '',
    experience: '',
    frequency: '',
    diet: '',
    allergies: '',
    injuries: '',
    environment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Fyll i din träningsprofil</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>Mål *</label>
          <select name="goal" required value={form.goal} onChange={handleChange}>
            <option value="">-- Välj --</option>
            <option>Gå ner i vikt</option>
            <option>Bygga muskler</option>
            <option>Bli starkare</option>
            <option>Få bättre kondition</option>
            <option>Må bättre och bli hälsosammare</option>
          </select>

          <label>Tidsram *</label>
          <select name="timeframe" required value={form.timeframe} onChange={handleChange}>
            <option value="">-- Välj --</option>
            <option>4 veckor</option>
            <option>8 veckor</option>
            <option>12 veckor</option>
            <option>6 månader</option>
            <option>Långsiktigt</option>
            <option>Annan</option>
          </select>

          <label>Träningsvana *</label>
          <select name="experience" required value={form.experience} onChange={handleChange}>
            <option value="">-- Välj --</option>
            <option>Nybörjare</option>
            <option>Medel</option>
            <option>Avancerad</option>
          </select>

          <label>Hur många dagar/vecka kan du träna? *</label>
          <select name="frequency" required value={form.frequency} onChange={handleChange}>
            <option value="">-- Välj --</option>
            <option>1–2</option>
            <option>3–4</option>
            <option>5+</option>
          </select>

          <label>Kostvanor</label>
          <select name="diet" value={form.diet} onChange={handleChange}>
            <option value="">-- Välj --</option>
            <option>Ganska hälsosam</option>
            <option>Oregelbunden</option>
            <option>Mycket strikt</option>
            <option>Osäker</option>
          </select>

          <label>Allergier/kostpreferenser</label>
          <input type="text" name="allergies" value={form.allergies} onChange={handleChange} />

          <label>Skador eller begränsningar</label>
          <textarea name="injuries" rows={2} value={form.injuries} onChange={handleChange} />

          <label>Träningsmiljö</label>
          <select name="environment" value={form.environment} onChange={handleChange}>
            <option value="">-- Välj --</option>
            <option>Gym</option>
            <option>Hemmaträning utan redskap</option>
            <option>Hemmaträning med redskap</option>
            <option>Utomhus</option>
            <option>Blandning</option>
          </select>

          <button type="submit">Skapa mitt upplägg</button>
        </form>
      ) : (
        <div>
          <h2>Tack! Ditt upplägg håller på att genereras...</h2>
          <p><strong>Mål:</strong> {form.goal}</p>
          <p><strong>Tidsram:</strong> {form.timeframe}</p>
          <p><strong>Träningsvana:</strong> {form.experience}</p>
          <p><strong>Träningsfrekvens:</strong> {form.frequency}</p>
          <p><strong>Kost:</strong> {form.diet}</p>
          <p><strong>Allergier/preferenser:</strong> {form.allergies}</p>
          <p><strong>Skador:</strong> {form.injuries}</p>
          <p><strong>Miljö:</strong> {form.environment}</p>
        </div>
      )}
    </main>
  );
}
