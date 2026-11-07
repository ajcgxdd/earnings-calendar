import { Link } from "react-router-dom";
import { mockCompanyInfo } from "../utils/mockCompanyinfo";
import "./companyInfo.css";

export function CompanyInfo() {
  function convertIntoCr(marketCap) {
    return (marketCap / 1e7).toLocaleString("en-IN") + " Cr.";
  }

  const stockMetrics = [
    {
      label: "Current Price",
      value: `₹${mockCompanyInfo.stock.currentPrice.toLocaleString("en-IN")}`,
    },
    {
      label: "Market Capitalization",
      value: convertIntoCr(mockCompanyInfo.stock.marketCap),
    },
    {
      label: "Price-to-Earnings Ratio",
      value: `${mockCompanyInfo.stock.peRatio}x`,
    },
    {
      label: "Trading Volume",
      value: mockCompanyInfo.stock.volume.toLocaleString("en-IN"),
    },
  ];

  const profileDetails = [
    { label: "Founded", value: mockCompanyInfo.profile.founded },
    { label: "Headquarters", value: mockCompanyInfo.profile.headquarters },
    { label: "CEO", value: mockCompanyInfo.profile.ceo },
    {
      label: "Employees",
      value: mockCompanyInfo.profile.employees.toLocaleString("en-IN"),
    },
  ];

  return (
    <main className="company-financials">
      <Link to="/" className="company-back-link">
        ← Back to earnings calendar
      </Link>

      <div className="company-info-layout">
        <div className="company-main">
          <section className="company-overview">
            <p className="company-section-label">COMPANY OVERVIEW</p>

            <div className="company-identity">
              <div>
                <h1>{mockCompanyInfo.companyName}</h1>

                <p className="company-meta">
                  {mockCompanyInfo.exchange} / {mockCompanyInfo.symbol} /{" "}
                  {mockCompanyInfo.industry}
                </p>

                <a
                  href={mockCompanyInfo.profile.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {mockCompanyInfo.symbol.toLowerCase()}.com
                </a>
              </div>

              <span className="company-symbol">{mockCompanyInfo.symbol}</span>
            </div>
          </section>

          <section className="company-stock-details">
            {stockMetrics.map((metric) => (
              <div className="stock-metric" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </section>
        </div>

        <aside className="company-profile">
          <p className="company-section-label">COMPANY PROFILE</p>

          <div className="company-profile-details">
            {profileDetails.map((detail) => (
              <div className="profile-detail" key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>

          <p className="company-description">
            {mockCompanyInfo.profile.description}
          </p>
        </aside>
      </div>
    </main>
  );
}
