import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="topbar">
      <Link to="/" className="brand">
        <div className="brand-icon">E</div>
        <span>Earnings terminal</span>
      </Link>
      <nav className="top-nav">
        <Link to="/" className="nav-link active">
          Calendar
        </Link>

        <Link to="/watchlist" className="nav-link">
          Watchlist
        </Link>
      </nav>

      <button className="search-button" type="button">
        <span>Search companies...</span>
        <span>⌕</span>
      </button>
    </header>
  );
}
