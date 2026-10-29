import { CalendarDay } from "./calendarDay";
import './CalendarGrid.css'

export function CalendarGrid({ dates, currentDate, selectedDate, view, onDateSelect }) {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className={`calendar-grid calendar-grid--${view}`}>
      <div className="calendar-grid__weekdays">
        {weekdays.map((day) => (
          <div className="calendar-grid__weekday" key={day}>
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid__dates">
        {dates.map((date) => (
          <CalendarDay
            key={date.toISOString()}
            date={date}
            currentDate={currentDate}
            selectedDate={selectedDate}
            view={view}
            onDateSelect={onDateSelect}
          />
        ))}
      </div>
    </div>
  );
}
