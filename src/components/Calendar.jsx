"use client";
import { useEffect, useState } from "react";
import CalendarHeader from "./CalendarHeader.jsx";
import MobileCalendarHeader from "./MobileCalenderHeader.jsx";
import CalendarGrid from "./CalendarGrid.jsx";
import EventList from "./EventList.jsx";
import EventModal from "./EventModal.jsx";
import { loadTempEvents } from "./tempData.jsx";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("calendar");
  const [sortBy, setSortBy] = useState("date");
  const [events, setEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: new Date(),
    priority: "Medium",
    colorClass: "bg-purple-200 border-purple-400 text-purple-800",
  });
  const [draggingEvent, setDraggingEvent] = useState(null);

  //   //  to previous month

  const prevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  //   //  to next month
  const nextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  //   // click events
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  //   // add new events
  const handleAddEventClick = (day) => {
    if (day) {
      const newDate = new Date(currentDate);
      newDate.setDate(day);
      setNewEvent({ ...newEvent, date: newDate });
    }
    setSelectedEvent(null);
    setShowEventModal(true);
  };

  //   // new event - to submit
  const handleNewEventSubmit = () => {
    if (newEvent.title.trim() === "") return;

    const eventToAdd = {
      id: `event-${Date.now()}`,
      ...newEvent,
    };

    setEvents([...events, eventToAdd]);
    setShowEventModal(false);
    setNewEvent({
      title: "",
      description: "",
      date: new Date(),
      priority: "Medium",
      colorClass: "bg-purple-200 border-purple-400 text-purple-800",
    });
  };

  //   // update events
  const handleEventUpdate = () => {
    if (!selectedEvent) return;

    const updatedEvents = events.map((event) => {
      if (event.id === selectedEvent.id) {
        return selectedEvent;
      }
      return event;
    });

    setEvents(updatedEvents);
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  //   //delete event
  const handleEventDelete = () => {
    if (!selectedEvent) return;

    const updatedEvents = events.filter(
      (event) => event.id !== selectedEvent.id
    );
    setEvents(updatedEvents);
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  //   // Handling field change in modal
  const handleFieldChange = (field, value) => {
    if (selectedEvent) {
      setSelectedEvent({ ...selectedEvent, [field]: value });
    } else {
      setNewEvent({ ...newEvent, [field]: value });
    }
  };

  const sortedEvents = [...events].sort((a, b) => {
    if (sortBy === "date") {
      return a.date - b.date;
    } else if (sortBy === "priority") {
      const priorityValues = { High: 0, Medium: 1, Low: 2 };
      return priorityValues[a.priority] - priorityValues[b.priority];
    }
    return 0;
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await loadTempEvents();
      setEvents(eventData);
    };

    fetchEvents();
  }, []);

  //   // drag start
  const handleDragStart = (event) => {
    setDraggingEvent(event);
  };

  //   // drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //   // drop on a calendar day
  const handleDrop = (day) => {
    if (!draggingEvent) return;

    const updatedEvents = events.map((event) => {
      if (event.id === draggingEvent.id) {
        const newDate = new Date(currentDate);
        newDate.setDate(day);
        return { ...event, date: newDate };
      }
      return event;
    });

    setEvents(updatedEvents);
    setDraggingEvent(null);
  };

  return (
    <div className="font-sans max-w-6xl mx-auto p-4">
      <CalendarHeader
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
        currentDate={currentDate}
        view={view}
        onViewChange={setView}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onAddEvent={() => handleAddEventClick()}
      />

      {view === "calendar" && (
        <CalendarGrid
          currentDate={currentDate}
          events={events}
          onAddEvent={handleAddEventClick}
          onEventClick={handleEventClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
      )}

      {view === "list" && (
        <EventList
          events={sortedEvents}
          onEventClick={handleEventClick}
          onDragStart={handleDragStart}
        />
      )}

      {showEventModal && (
        <EventModal
          isEditing={!!selectedEvent}
          eventToEdit={selectedEvent || newEvent}
          onClose={() => {
            setShowEventModal(false);
            setSelectedEvent(null);
          }}
          onUpdate={handleEventUpdate}
          onAdd={handleNewEventSubmit}
          onDelete={handleEventDelete}
          onFieldChange={handleFieldChange}
        />
      )}
      <div className=" block md:hidden">
        <MobileCalendarHeader sortBy={sortBy} onSortChange={setSortBy} />
        <EventList
          events={sortedEvents}
          onEventClick={handleEventClick}
          onDragStart={handleDragStart}
        />
      </div>
    </div>
  );
}
