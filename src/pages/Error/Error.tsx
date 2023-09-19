import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";
import { errorTitle } from "../../utils/titles";

import "./Error.scss";

export const Error = () => {
  return (

      <main className="error-page">
        <Helmet>
          <title>{errorTitle}</title>
        </Helmet>
        <header className="error-page__header">
          <span className="error-page__header__title">404</span>
          <span className="error-page__header__subtitle">
            Oups ! Il semblerait que cette page n'existe pas
          </span>
        </header>
        <section className="error-page__section">
          <Link to="/" className="error-page__section__link">
            Accueil
          </Link>
        </section>
      </main>
  );
};
