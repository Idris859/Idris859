import './app.css'

export function App() {
  return (
    <main className="app-shell">
      <p className="eyebrow">Independent exploration workspace</p>
      <h1>Horizon Atlas</h1>
      <p className="intro">A fresh foundation for mapping places, perspectives, and journeys.</p>
      <section aria-label="Project status" className="status-card">
        <span aria-hidden="true">✦</span>
        <div><strong>Ready for Milestone 1</strong><p>Project setup and reference inventory are complete.</p></div>
      </section>
    </main>
  )
}
