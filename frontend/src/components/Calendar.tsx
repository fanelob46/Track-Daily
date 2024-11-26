import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import "./Calendar.css"; 

const MyCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="flex flex-col items-center p-4">
      {/* <h1 className="text-2xl font-bold mb-4">React Calendar</h1> */}
      <Calendar
        onChange={setDate}
        value={date}
        className="bg-white shadow-md rounded-lg"
      />
      <p className="mt-4">
        Selected Date:{" "}
        <span className="text-[var(--accent)] font-semibold">
          {date.toDateString()}
        </span>
      </p>
    </div>
  );
};

export default MyCalendar;
