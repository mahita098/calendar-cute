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
}) {
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Cute Calendar
        </h1>
        <p className="text-gray-600">Your adorable event planner</p>
      </div>
      <div>
        <div className="flex items-center">
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold mx-4 text-purple-300">
            {monthName} {currentDate.getFullYear()}
          </h2>
          <button
            onClick={onNextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-3 py-1 rounded-md flex items-center ${
                view === "calendar" ? "bg-white shadow-sm" : "text-gray-600"
              }`}
              onClick={() => onViewChange("calendar")}
            >
              <Grid className="w-4 h-4 mr-1" />
              Calendar
            </button>
            <button
              className={`px-3 py-1 rounded-md flex items-center  ${
                view === "list" ? "bg-white shadow-sm" : "text-gray-600"
              }`}
              onClick={() => onViewChange("list")}
            >
              <List className="w-4 h-4 mr-1" />
              List
            </button>
          </div>

          {view === "list" && (
            <select
              className="bg-white border rounded-md px-3 py-1"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="priority">Sort by Priority</option>
            </select>
          )}

          <button
            className="bg-purple-500 text-white px-4 py-1 rounded-md hover:bg-purple-600 flex items-center"
            onClick={onAddEvent}
          >
            <span className="mr-1">+</span> Add Event
          </button>
        </div>
      </div>
    </>
  );
}
