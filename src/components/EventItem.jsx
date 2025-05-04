export default function EventItem({ event, onClick, onDragStart }) {
  return (
    <div
      className={`text-xs p-1 mb-1 rounded-md border ${event.colorClass} cursor-pointer`}
      draggable
      onDragStart={() => onDragStart(event)}
      onClick={() => onClick(event)}
    >
      {event.title}
    </div>
  );
}
