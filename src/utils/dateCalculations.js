import { startOfWeek, addWeeks, addMonths, eachDayOfInterval, startOfMonth, endOfMonth, isSameDay as dateFnsIsSameDay, isSameMonth as dateFnsIsSameMonth } from "date-fns";

export function getStartOfWeek(date){
    return startOfWeek(date, {weekStartsOn: 1, });
}

export function getWeekDates(date){
    const start = getStartOfWeek(date);

    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    return eachDayOfInterval({start, end,});
}

export function getMonthDates(date){
    const firstDay = startOfMonth(date);
    const lastDay = endOfMonth(date);

    const calendarStart = getStartOfWeek(firstDay, {weekStartsOn: 1,});
    const calendarEnd = new Date(startOfWeek(lastDay, {weekStartsOn: 1, }));
    calendarEnd.setDate(calendarEnd.getDate() + 6);

    return eachDayOfInterval({start: calendarStart, end: calendarEnd});
}

export function navigateWeek(date, direction){
    return addWeeks(date, direction);
}

export function navigateMonth(date, direction){
    return addMonths(date, direction);
}

export function isSameDay(date1, date2){
    return dateFnsIsSameDay(date1, date2);
}

export function isSameMonth(date1, date2){
    return dateFnsIsSameMonth(date1, date2);
}