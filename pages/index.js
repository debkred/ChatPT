export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#0d3b66' }}>👋 Välkommen till <span style={{ color: '#3f88c5' }}>ChatPT</span></h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Din AI-drivna personliga tränare online.</p>
      <a href="/profil" style={{ background: '#3f88c5', color: '#fff', padding: '12px 24px', textDecoration: 'none', borderRadius: '8px' }}>
        🚀 Starta din träningsresa
      </a>
    </div>
  );
}