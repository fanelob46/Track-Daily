// import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store";

const UserInfo = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
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

  console.log("user info ", userInfo);

  return (
    <div className="p-4 w-[50%] space-y-2">
      <div className="flex items-center text-xl gap-2 font-semibold w-full">
        <p>
          Hello, {userInfo?.firstName} {userInfo?.lastName}!
        </p>
        <img src="wave.png" className="w-[6%]" />
      </div>
      <p className="text-gray-500 text-md">Today, {getCurrentDate()}</p>
    </div>
  );
};

export default UserInfo;
