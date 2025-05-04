export default function EventItem({ event, onClick }) {
  return (
    <div
      className={`text-xs p-1 mb-1 rounded-md border ${event.colorClass} cursor-pointer`}
      onClick={() => onClick(event)}
    >
      {event.title}
    </div>
  );
}
