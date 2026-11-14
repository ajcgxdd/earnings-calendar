import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { mockCompanies } from "../utils/mockCompanyinfo";
import "./Header.css";

const companies = Object.values(mockCompanies).map(
  ({symbol, companyName}) => ({symbol, companyName})
);

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();
  const query = searchQuery.trim().toLowerCase();

  const filteredCompanies = companies.filter((company) => {
    return(
      company.symbol.toLowerCase().includes(query) ||
      company.companyName.toLowerCase().includes(query)
    )
  })
  
  function handleCompanySelect(symbol) {
    navigate(`/company/${symbol}`);
    setSearchQuery("");
    setShowResults(false);
  }

  return (
    <header className="topbar">
      <Link to="/" className="brand">
        <div className="brand-icon">E</div>
        <span>Earnings terminal</span>
      </Link>
      <nav className="top-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          Calendar
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Watchlist
        </NavLink>
      </nav>

      <div className="header-search">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            aria-label="Search companies"
            placeholder="Search companies..."
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setShowResults(false);
              }
            }}
          />
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>
        </div>

        {showResults && searchQuery.trim() !== "" && (
          <div className="search-dropdown">
            {filteredCompanies.length > 0 ? (
              <>
                <p className="search-dropdown-label">COMPANIES</p>

                {filteredCompanies.map((company) => (
                  <button
                    key={company.symbol}
                    className="search-result"
                    type="button"
                    onClick={() => handleCompanySelect(company.symbol)}
                  >
                    <span className="search-result-symbol">
                      {company.symbol}
                    </span>
                    <span className="search-result-name">
                      {company.companyName}
                    </span>
                  </button>
                ))}
              </>
            ) : (
              <p className="search-no-result">No companies found</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
