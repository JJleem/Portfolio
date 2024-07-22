import React, { useState, useEffect } from "react";

const CurrentTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      let hours = currentDate.getHours();
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const seconds = String(currentDate.getSeconds()).padStart(2, "0");
      const amPm = hours >= 12 ? "오후" : "오전";

      if (hours > 12) {
        hours = hours - 12;
      } else if (hours === 0) {
        hours = 12;
      }

      const formattedDateTime = `${year}년 ${month}월 ${day}일 ${amPm} ${hours}:${minutes}:${seconds}`;
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{currentDateTime}</div>;
};

export default CurrentTime;
