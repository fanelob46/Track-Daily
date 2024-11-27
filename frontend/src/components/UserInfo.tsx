// import React from "react";

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
    <div className="p-6 w-[30%] space-y-2">
      <div className="flex items-center text-xl gap-2 font-semibold">
      <p>Hello, {"username"}!</p>
      <img
      src="wave.png"
      className="w-[6%]"
      />
      </div>
      <p className="text-gray-500 text-md">Today, {getCurrentDate()}</p>
    </div>
  );
};

export default UserInfo;
