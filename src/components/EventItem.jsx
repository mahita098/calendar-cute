export default function EventItem({ event, onClick, onDragStart }) {
  return (
    <div
      className={` text-[10px] md:text-xs p-1 mb-1 rounded-md border ${event.colorClass} cursor-pointer w-fit`}
      draggable
      onDragStart={() => onDragStart(event)}
      onClick={() => onClick(event)}
    >
      {event.title}
    </div>
  );
}
