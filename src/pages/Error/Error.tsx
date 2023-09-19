import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Error.scss'

export const Error = () => {

  useEffect(() => {
    document.title = '404 - Page introuvable'
  }, [])

  return (
    <main className="error-page">
      <header className="error-page__header">
        <span className="error-page__header__title">404</span>
        <span className="error-page__header__subtitle">Oups ! Il semblerait que cette page n'existe pas</span>
      </header>
      <section className="error-page__section">
        <Link to="/" className="error-page__section__link">Accueil</Link>
      </section>
    </main>
  )
}
