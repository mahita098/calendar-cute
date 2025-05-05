import CalendarDay from "./CalendarDay.jsx";
import { getDaysInMonth, getFirstDayOfMonth } from "./utils.jsx";

export default function CalendarGrid({
  currentDate,
  events,
  onDragOver,
  onDrop,
  onAddEvent,
  onEventClick,
  onDragStart,
}) {
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    // empty cells for the days avan the first day the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="bg-gray-50 h-24 rounded-lg border border-gray-100"
        ></div>
      );
    }

    // month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = events.filter(
        (event) =>
          event.date.getDate() === day &&
          event.date.getMonth() === month &&
          event.date.getFullYear() === year
      );

      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === month &&
        new Date().getFullYear() === year;

      days.push(
        <CalendarDay
          key={`day-${day}`}
          day={day}
          isToday={isToday}
          events={dayEvents}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onAddEvent={onAddEvent}
          onEventClick={onEventClick}
          onDragStart={onDragStart}
        />
      );
    }

    return days;
  };

  return (
    <div className="mb-6 border-4 border-purple-200 p-4 py-6 rounded-2xl">
      <div className="grid grid-cols-7 gap-1 mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-500 text-sm py-2"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
    </div>
  );
}
