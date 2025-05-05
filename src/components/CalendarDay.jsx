import { AlertCircle } from "lucide-react";
import EventItem from "./EventItem.jsx";

export default function CalendarDay({
  day,
  isToday,
  events,
  onDragOver,
  onDrop,
  onAddEvent,
  onEventClick,
  onDragStart,
}) {
  return (
    <div
      className={`h-24 p-1 border rounded-lg transition-all ${
        isToday
          ? "bg-purple-50 border-purple-300"
          : "bg-white text-gray-400 border-gray-200"
      } hover:bg-gray-50`}
      onDragOver={onDragOver}
      onDrop={() => onDrop(day)}
    >
      <div className="flex justify-between items-center mb-1">
        <span
          className={`text-sm font-semibold ${
            isToday ? "text-purple-600" : ""
          }`}
        >
          {day}
        </span>
        <button
          onClick={() => onAddEvent(day)}
          className="text-purple-400 hover:text-white text-sm px-1 rounded cursor-pointer bg-purple-50 hover:bg-purple-00"
        >
          +
        </button>
      </div>
      <div className="overflow-y-auto max-h-16">
        {events.slice(0, 2).map((event) => (
          <EventItem
            key={event.id}
            event={{
              ...event,
              title:
                event.title.length > 20
                  ? event.title.slice(0, 20) + "..."
                  : event.title,
            }}
            onClick={onEventClick}
            onDragStart={onDragStart}
          />
        ))}
        {events.length > 2 && (
          <div className="text-xs text-gray-500 flex items-center">
            <AlertCircle className="w-3 h-3 mr-1" />
            {events.length - 2} more
          </div>
        )}
      </div>
    </div>
  );
}
