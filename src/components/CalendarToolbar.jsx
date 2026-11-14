import { addDays, format } from "date-fns";
import { getStartOfWeek } from "../utils/dateCalculations";
import "./CalendarToolbar.css";

function getTitle(currentDate, view) {
  if (view === "month") {
    return format(currentDate, "MMMM yyyy");
  }

  const weekStart = getStartOfWeek(currentDate);
  const weekEnd = addDays(weekStart, 6);

  const startFormat =
    weekStart.getFullYear() === weekEnd.getFullYear() ? "MMM d" : "MMM d, yyyy";

  return `${format(weekStart, startFormat)} – ${format(weekEnd, "MMM d, yyyy")}`;
}

export function CalendarToolbar({
  currentDate,
  view,
  onNavigate,
  onToday,
  onViewChange,
}) {
  const title = getTitle(currentDate, view);

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
            aria-label="Next"
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
            aria-pressed={view === "month"}
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
            aria-pressed={view === "week"}
            onClick={() => onViewChange("week")}
          >
            Week
          </button>
        </div>
      </div>
    </div>
  );
}