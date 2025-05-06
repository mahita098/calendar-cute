import React from "react";
import { List } from "lucide-react";

export default function MobileCalendarHeader({
  currentDate,
  view,
  sortBy,
  onSortChange,
}) {
  return (
    <>
      <div>
        <div className="flex gap-4 mb-3">
          <div className="flex bg-purple-100 rounded-lg p-1">
            <button className="px-3 py-1 rounded-md flex items-center cursor-pointer text-gray-600">
              <List className="w-4 h-4 mr-1" />
              Event List
            </button>
          </div>

          <select
            className="bg-white border border-gray-300 text-gray-400 rounded-md px-3 py-1 "
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="date">Sort by Date</option>
            <option value="priority">Sort by Priority</option>
          </select>
        </div>
      </div>
    </>
  );
}
