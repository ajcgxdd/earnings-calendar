import { format } from "date-fns";
import { isSameDay, isSameMonth } from "../utils/dateCalculations";
import { mockEarnings } from "../utils/mockEarnings";
import "./calendars.css";

export function CalendarDay({ date, currentDate, selectedDate, view, onDateSelect }){
    const isToday = isSameDay(date, new Date());
    const isSelected = isSameDay(date, selectedDate);
    const isCurrentMonth = isSameMonth(date, currentDate);

    const dayEarnings = mockEarnings.filter((earning) => earning.date === format(date, "yyyy-MM-dd"));

    const dayClasses = ["calendar-day", 
        isToday ? "calendar-day--today": "",
        isSelected ? "calendar-day--selected" : "",
        view === "month" && !isCurrentMonth? "calendar-day--outside-month" : "",
    ].filter(Boolean).join(" ");

    return(
        <button type="button"
        className={dayClasses}
        onClick={() => onDateSelect(date)}>
            <span className="calendar-day__number">
                {format(date, "d")}
            </span>

            <div className="calendar-day__earnings">
                {dayEarnings.map((earning) => (
                    <span key={earning.id} className="calendar-day__earning" 
                    title={earning.companyName}>
                        {earning.symbol}
                    </span>
                ))}
            </div>
        </button>
    );
}