import { Link } from "react-router-dom";
import "./PageMessage.css";

// Shared "empty" page used by the watchlist placeholder and the not-found states.
export function PageMessage({ icon, title, children }) {
  return (
    <section className="page-message">
      <div className="placeholder-icon" aria-hidden="true">
        {icon}
      </div>

      <h1>{title}</h1>
      <p>{children}</p>

      <Link to="/">← Back to earnings calendar</Link>
    </section>
  );
}
