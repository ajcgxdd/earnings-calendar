import { useState } from "react";
import { CalendarToolbar } from "./CalendarToolbar";
import { CalendarGrid } from "./CalendarGrid";
import "./calendars.css"
import { getMonthDates, getWeekDates, navigateMonth, navigateWeek } from "../utils/dateCalculations";

export function EarningsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState("month");

  const calendarDates =
    view === "month" ? getMonthDates(currentDate) : getWeekDates(selectedDate);

  function handleNavigate(direction) {
    if (view === "month") {
      setCurrentDate((date) => navigateMonth(date, direction));
    } else {
      setSelectedDate((date) => navigateWeek(date, direction));
    }
  }

  function handleToday() {
    const today = new Date();

    setCurrentDate(today);
    setSelectedDate(today);
  }

  function handleViewChange(nextView) {
    setView(nextView);
  }

  function handleDateSelect(date) {
    setSelectedDate(date);
  }

  return (
    <section className="earnings-calendar">
      <CalendarToolbar
        currentDate={currentDate}
        view={view}
        onNavigate={handleNavigate}
        onToday={handleToday}
        onViewChange={handleViewChange}
      />

      <CalendarGrid
        dates={calendarDates}
        currentDate={currentDate}
        selectedDate={selectedDate}
        view={view}
        onDateSelect={handleDateSelect}
      />
    </section>
  );
}
