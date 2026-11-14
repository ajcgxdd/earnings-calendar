import { useState } from "react";
import { CalendarToolbar } from "./CalendarToolbar";
import { CalendarGrid } from "./CalendarGrid";
import { SelectedDateEarnings } from "./SelectedDateEarnings";
import { mockEarnings } from "../data/mockEarnings";
import "./EarningsCalendar.css";
import {
  getMonthDates,
  getWeekDates,
  navigateMonth,
  navigateWeek,
} from "../utils/dateCalculations";

export function EarningsCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState("month");

  const calendarDates =
    view === "month" ? getMonthDates(selectedDate) : getWeekDates(selectedDate);

  function handleNavigate(direction) {
    setSelectedDate((date) =>
      view === "month"
        ? navigateMonth(date, direction)
        : navigateWeek(date, direction),
    );
  }

  function handleToday() {
    setSelectedDate(new Date());
  }

  function handleViewChange(nextView) {
    setView(nextView);
  }

  function handleDateSelect(date) {
    setSelectedDate(date);
  }

  return (
    <section className="earnings-calendar">
      <div className="page-heading">
        <div>
          <p className="eyebrow">MARKET INTELLIGENCE / NSE</p>

          <h1>Earnings Calendar</h1>

          <p>Track upcoming results across Indian equities.</p>
        </div>
      </div>
      <CalendarToolbar
        currentDate={selectedDate}
        view={view}
        onNavigate={handleNavigate}
        onToday={handleToday}
        onViewChange={handleViewChange}
      />

      <CalendarGrid
        dates={calendarDates}
        currentDate={selectedDate}
        selectedDate={selectedDate}
        view={view}
        onDateSelect={handleDateSelect}
      />

      <SelectedDateEarnings
        selectedDate={selectedDate}
        earnings={mockEarnings}
      />
    </section>
  );
}
