import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const MyCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleDateChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setDate(value); // Single date
    } else if (Array.isArray(value) && value.length > 0) {
      setDate(value[0]); // First date in the range (if needed)
    } else {
      setDate(null); // Handle null case
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[100%]">
      {/* <h1 className="text-2xl font-bold mb-4">React Calendar</h1> */}
    <div className="flex flex-col items-center">
      <Calendar
        onChange={(value) => handleDateChange(value as Date | Date[] | null)} // Typecast to ensure compatibility
        value={date}
        className="bg-white rounded-lg"
      />
      <p className="mt-4">
        Selected Date:{" "}
        <span className="text-[var(--accent)] font-semibold">
          {date ? date.toDateString() : "No date selected"}
        </span>
      </p>
    </div>
  );
};

export default MyCalendar;
