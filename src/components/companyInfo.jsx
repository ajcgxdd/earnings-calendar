import { Link } from "react-router-dom";
import { mockCompanyInfo } from "../utils/mockCompanyinfo";
import "./companyInfo.css";
import { formattedDate } from "../utils/dateCalculations";
import { format } from "date-fns";

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

        <section className="company-latest-earnings">
          <div className="latest-earnings-header">
            <div>
              <p className="company-section-label">UPCOMING EARNINGS</p>
              <h2>{mockCompanyInfo.upcomingEarnings.quarter}</h2>
            </div>

            <span className="earnings-status">Upcoming</span>
          </div>

          <div className="latest-earnings-details">
            <div className="earnings-date">
              <span>Reporting Date</span>
              <strong>
                {formattedDate(mockCompanyInfo.upcomingEarnings.reportingDate)}
              </strong>
              <small>{mockCompanyInfo.upcomingEarnings.reportingTime}</small>
            </div>

            <div className="earnings-metric">
              <span>EPS Estimate</span>
              <strong>₹{mockCompanyInfo.upcomingEarnings.epsEstimate}</strong>
            </div>

            <div className="earnings-metric">
              <span>Revenue Estimate</span>
              <strong>
                ₹
                {mockCompanyInfo.upcomingEarnings.revenueEstimate.toLocaleString(
                  "en-IN",
                )}{" "}
                Cr.
              </strong>
            </div>

          </div>
        </section>
        <section className="historical-earnings">
          <strong>Historical Financial Performance</strong>
          <table>
            <thead>
              <tr>
                <th>Quarter</th>
                <th>Report Date</th>
                <th>EPS Reported</th>
                <th>EPS Estimate</th>
                <th>EPS Change</th>
                <th>Revenue Reported</th>
                <th>Revenue Estimate</th>
                <th>Revenue Change</th>
              </tr>
            </thead>
            <tbody>
              {mockCompanyInfo.earningsHistory.map((item) => (
                <tr key={item.quarter}>
                  <td>{item.quarter}</td>
                  <td>{format(new Date(item.date), "dd-MM-yyyy")}</td>
                  <td>{item.epsActual}</td>
                  <td>{item.epsEstimate}</td>
                  <td
                    className={
                      item.epsActual > item.epsEstimate
                        ? "result-beat"
                        : item.epsActual < item.epsEstimate
                          ? "result-miss"
                          : "result-met"
                    }
                  >
                    {item.epsActual > item.epsEstimate
                      ? "Beat"
                      : item.epsActual < item.epsEstimate
                        ? "Miss"
                        : "Met Expectations"}
                  </td>
                  <td>{item.revenueActual}</td>
                  <td>{item.revenueEstimate}</td>
                  <td
                    className={
                      item.revenueActual > item.revenueEstimate
                        ? "result-beat"
                        : item.revenueActual < item.revenueEstimate
                          ? "result-miss"
                          : "result-met"
                    }
                  >
                    {item.revenueActual > item.revenueEstimate
                      ? "Beat"
                      : item.revenueActual < item.revenueEstimate
                        ? "Miss"
                        : "Met Expectations"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
