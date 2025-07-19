'use client';
import { useState, useEffect } from 'react';

export default function LanguageSelector() {
  const [language, setLanguage] = useState('sv');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <div style={{ marginBottom: 20 }}>
      <label>Språk:</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="sv">Svenska</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
