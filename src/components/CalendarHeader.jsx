import React from "react";
import { ChevronLeft, ChevronRight, Grid, List } from "lucide-react";

export default function CalendarHeader({
  onPrevMonth,
  onNextMonth,
  currentDate,
  view,
  onViewChange,
  sortBy,
  onSortChange,
  onAddEvent,
}) {
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-2 flex items-center justify-between md:justify-start ">
          Mahita's Cute Calendar
          <img className="w-12 ml-1.5" src="../images/calendar1.gif" alt="" />
        </h1>
        <p className="text-gray-600">Crafted with love.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center bg-purple-100 rounded-lg p-1">
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
          </button>
          <h2 className="text-md font-semibold mx-4 text-purple-600">
            {monthName} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={onNextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 cursor-pointer" />
          </button>
        </div>
        <div className="flex mb-3">
          <div className="hidden md:flex gap-4 ">
            <div className="flex bg-purple-100 rounded-lg p-1">
              <button
                className={`px-3 py-1 rounded-md flex items-center cursor-pointer ${
                  view === "calendar"
                    ? "bg-white shadow-sm text-gray-600"
                    : "text-gray-600"
                }`}
                onClick={() => onViewChange("calendar")}
              >
                <Grid className="w-4 h-4 mr-1" />
                Calendar
              </button>
              <button
                className={`px-3 py-1 rounded-md flex items-center cursor-pointer  ${
                  view === "list"
                    ? "bg-white shadow-sm text-gray-600"
                    : "text-gray-600"
                }`}
                onClick={() => onViewChange("list")}
              >
                <List className="w-4 h-4 mr-1" />
                Events List
              </button>
            </div>

            {view === "list" && (
              <select
                className="bg-white border border-gray-300 text-gray-400 rounded-md px-3 py-1 cursor-pointer"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="priority">Sort by Priority</option>
              </select>
            )}
          </div>
          <button
            className="bg-purple-500 text-white px-4 py-1 rounded-md hover:bg-purple-600 flex items-center cursor-pointer ml-3"
            onClick={onAddEvent}
          >
            <span className="mr-1">+</span> Add Event
          </button>
        </div>
      </div>
    </div>
  );
}
