import { Link, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { getCompanyBySymbol } from "../utils/mockCompanyinfo";
import { formattedDate } from "../utils/dateCalculations";
import { PageMessage } from "./PageMessage";
import "./companyInfo.css";

function convertIntoCr(marketCap) {
  return (marketCap / 1e7).toLocaleString("en-IN") + " Cr.";
}

function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getComparison(actual, estimate) {
  if (actual > estimate) return { label: "Beat", className: "result-beat" };
  if (actual < estimate) return { label: "Miss", className: "result-miss" };
  return { label: "Met Expectations", className: "result-met" };
}

export function CompanyInfo() {
  const { symbol } = useParams();
  const company = getCompanyBySymbol(symbol);

  if (!company) {
    return (
      <PageMessage icon="?" title="Company not found">
        We don't have data for "{symbol}" yet.
      </PageMessage>
    );
  }

  const { profile, stock, upcomingEarnings, earningsHistory } = company;

  const stockMetrics = [
    {
      label: "Current Price",
      value: `₹${stock.currentPrice.toLocaleString("en-IN")}`,
    },
    {
      label: "Market Capitalization",
      value: convertIntoCr(stock.marketCap),
    },
    {
      label: "Price-to-Earnings Ratio",
      value: `${stock.peRatio}x`,
    },
    {
      label: "Trading Volume",
      value: stock.volume.toLocaleString("en-IN"),
    },
  ];

  const profileDetails = [
    { label: "Founded", value: profile.founded },
    { label: "Headquarters", value: profile.headquarters },
    { label: "CEO", value: profile.ceo },
    {
      label: "Employees",
      value: profile.employees.toLocaleString("en-IN"),
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
                <h1>{company.companyName}</h1>

                <p className="company-meta">
                  {company.exchange} / {company.symbol} / {company.industry}
                </p>

                <a href={profile.website} target="_blank" rel="noreferrer">
                  {getDomain(profile.website)}
                </a>
              </div>

              <span className="company-symbol">{company.symbol}</span>
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

          <p className="company-description">{profile.description}</p>
        </aside>

        <section className="company-latest-earnings">
          <div className="latest-earnings-header">
            <div>
              <p className="company-section-label">UPCOMING EARNINGS</p>
              <h2>{upcomingEarnings.quarter}</h2>
            </div>

            <span className="earnings-status">Upcoming</span>
          </div>

          <div className="latest-earnings-details">
            <div className="earnings-date">
              <span>Reporting Date</span>
              <strong>{formattedDate(upcomingEarnings.reportingDate)}</strong>
              <small>{upcomingEarnings.reportingTime}</small>
            </div>

            <div className="earnings-metric">
              <span>EPS Estimate</span>
              <strong>₹{upcomingEarnings.epsEstimate}</strong>
            </div>

            <div className="earnings-metric">
              <span>Revenue Estimate</span>
              <strong>
                ₹{upcomingEarnings.revenueEstimate.toLocaleString("en-IN")} Cr.
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
              {earningsHistory.map((item) => {
                const eps = getComparison(item.epsActual, item.epsEstimate);
                const revenue = getComparison(
                  item.revenueActual,
                  item.revenueEstimate,
                );

                return (
                  <tr key={item.quarter}>
                    <td>{item.quarter}</td>
                    <td>{format(parseISO(item.date), "dd-MM-yyyy")}</td>
                    <td>{item.epsActual}</td>
                    <td>{item.epsEstimate}</td>
                    <td className={eps.className}>{eps.label}</td>
                    <td>{item.revenueActual}</td>
                    <td>{item.revenueEstimate}</td>
                    <td className={revenue.className}>{revenue.label}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
