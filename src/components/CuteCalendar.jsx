"use client";
import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader.jsx";

const CuteCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  //  to previous month

  const prevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  //  to next month
  const nextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div className="font-sans max-w-6xl mx-auto p-4">
      <CalendarHeader onPrevMonth={prevMonth} onNextMonth={nextMonth} />
    </div>
  );
};

export default CuteCalendar;
