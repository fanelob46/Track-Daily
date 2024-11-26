import React from "react";

const UserInfo = () => {
  const getCurrentDate = () => {
    const date = new Date();

    // Get the components of the date
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.getDate();
    const month = date
      .toLocaleDateString("en-US", { month: "short" })
      .toUpperCase();
    const year = date.getFullYear();

    // Format the date as "Mon 25 NOV 2024"
    return `${weekday} ${day} ${month} ${year}`;
  };

  return (
    <div className="border border-gray-400 p-6 max-w-md mx-auto bg-white shadow-lg rounded-md">
      <h1>Hello, {"username"}</h1>
      <h1>Today, {getCurrentDate()}</h1>
    </div>
  );
};

export default UserInfo;
