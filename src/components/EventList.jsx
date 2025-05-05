import { formatDate } from "./utils.jsx";

export default function EventList({ events, onEventClick, onDragStart }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      {events.length > 0 ? (
        events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 p-4 hover:bg-purple-50 cursor-pointer"
            onClick={() => onEventClick(event)}
            draggable
            onDragStart={() => onDragStart(event)}
          >
            <div className="flex-grow">
              <div className="flex items-center mb-1">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    event.colorClass.split(" ")[0]
                  }`}
                ></div>
                <h3
                  className={` bg-transparent font-semibold ${event.colorClass}`}
                >
                  {event.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
            <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
              <div className="text-sm text-gray-500">
                {formatDate(event.date)}
              </div>
              <div
                className={`text-xs px-2 py-1 rounded-full mt-1 w-fit ${
                  event.priority === "High"
                    ? "bg-red-100 text-red-800"
                    : event.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {event.priority}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-8 text-center text-gray-500">
          No events found. Add Events!
        </div>
      )}
    </div>
  );
}
