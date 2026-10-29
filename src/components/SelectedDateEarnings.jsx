import { useState } from "react";
import { format } from "date-fns";
import { getEarningsResult } from "../utils/earningsCalculation";
import "./SelectedDateEarnings.css";

export function SelectedDateEarnings({ selectedDate, earnings }) {
  const [searchQuery, setSearchQuery] = useState("");

  const selectedDateString = format(selectedDate, "yyyy-MM-dd");

  const selectedDateEarnings = earnings.filter(
    (earning) => earning.date === selectedDateString,
  );

  const filteredEarnings = selectedDateEarnings.filter((earning) => {
    const query = searchQuery.trim().toLowerCase();

    return (
      earning.symbol.toLowerCase().includes(query) ||
      earning.companyName.toLowerCase().includes(query)
    );
  });

  return (
    <section className="selected-date-earnings">
      <div className="selected-date-earnings__header">
        <div>
          <p className="selected-date-earnings_label">SELECTED DATE</p>

          <h2>{format(selectedDate, "EEEE, MMMM d, yyyy")}</h2>
        </div>

        <span className="selected-date-earnings__count">
          {filteredEarnings.length}
          {filteredEarnings.length === 1 ? " event" : " events"}
        </span>
      </div>

      <div className="selected-date-earnings__search">
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search companies on this date..."
          aria-label="Search companies for the selected date"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
          >
            Clear
          </button>
        )}
      </div>

      {selectedDateEarnings.length === 0 ? (
        <p className="selected-date-earnings__empty">
          No earnings scheduled for this date.
        </p>
      ) : filteredEarnings.length === 0 ? (
        <p className="selected-date-earnings__empty">
          No companies match your search.
        </p>
      ) : (
        <div className="selected-date-earnings__list">
          {filteredEarnings.map((earning) => {
            const result = getEarningsResult(earning);
            return(
            <div key={earning.id} className="selected-date-earnings__item">
              <div className="selected-date-earnings__company">
                <h3>{earning.symbol}</h3>
                <p>{earning.companyName}</p>
              </div>

              <div className="selected-date-earnings__details">
                <span>{earning.time}</span>

                <span>EPS Estimate: {earning.epsEstimate ?? "N/A"}</span>
              </div>

              <span className={`earnings-result earnings-result--${result.toLowerCase()}`}>
                {result}
              </span>
            </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
