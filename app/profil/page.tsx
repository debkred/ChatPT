
export default function Profil() {
  return (
    <main>
      <h2>Profilformulär</h2>
      <form action="/resultat">
        <label>Mål: <input name="mål" /></label>
        <button type="submit">Skicka</button>
      </form>
    </main>
  );
}
