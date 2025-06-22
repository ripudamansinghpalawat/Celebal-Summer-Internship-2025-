// src/pages/CalendarPage.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-fit">
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <Calendar onChange={setDate} value={date} className="REACT-CALENDAR p-2" />
    </div>
  );
}
