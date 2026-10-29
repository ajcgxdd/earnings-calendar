import { format } from "date-fns";
import "./CalendarToolbar.css"

export function CalendarToolbar({ currentDate, view, onNavigate, onToday, onViewChange }){
  const title = view === "month" ? format(currentDate, "MMMM yyyy") : "Selected week";

  return (
    <div className="calendar-toolbar">
      <div className="calendar-toolbar__heading">
        <h2 className="calendar-toolbar__title">{title}</h2>

        <p className="calendar-toolbar__subtitle">
          Track upcoming company earnings
        </p>
      </div>

      <div className="calendar-toolbar__controls">
        <button className="calendar-toolbar__today" onClick={onToday}>
          Today
        </button>

        <div className="calendar-toolbar__navigation">
          <button
            className="calendar-toolbar__nav-button"
            onClick={() => onNavigate(-1)}
            aria-label="Previous"
          >
            &lt;
          </button>

          <button
            className="calendar-toolbar__nav-button"
            onClick={() => onNavigate(1)}
          >
            &gt;
          </button>
        </div>

        <div className="calendar-toolbar__view-toggle">
          <button
            className={
              view === "month"
                ? "calendar-toolbar__view-button active"
                : "calendar-toolbar__view-button"
            }
            onClick={() => onViewChange("month")}
          >
            Month
          </button>

          <button
            className={
              view === "week"
                ? "calendar-toolbar__view-button active"
                : "calendar-toolbar__view-button"
            }
            onClick={() => onViewChange("week")}
          >
            Week
          </button>

        </div>
      </div>
    </div>
  );
}
    