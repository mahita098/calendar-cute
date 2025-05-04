import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarHeader({
  onPrevMonth,
  onNextMonth,
  currentDate,
}) {
  //   const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });

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
          <h2 className="text-xl font-semibold mx-4">
            {/* {monthName} {currentDate.getFullYear()} */}
            month month
          </h2>
          <button
            onClick={onNextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </>
  );
}
