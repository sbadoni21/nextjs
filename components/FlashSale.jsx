// components/CountdownTimer.js
"use client";
import { useState, useEffect } from "react";

const FlashSale = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDate = new Date("2023-09-28T00:00:00").getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        total: difference,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-96 pl-32 pr-32 pt-16 border-b-2 pb-4">
      <div className="flex justify-start items-center gap-4">
        <div className="w-2 h-5 bg-red-600"></div>
        <div className=" text-red-600">Today's</div>
      </div>
      <div className="flex flex-row justify-start items-center gap-20 ">
        <div className="font-bold text-3xl pt-3">Flash Sales</div>
        <div>
          {timeLeft.total > 0 ? (
            <div>
              <p className="font-bold text-sm">
                Days : Hours : Minutes : Seconds
              </p>
              <p className="font-bold text-2xl">
                {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{" "}
                {timeLeft.seconds}
              </p>
            </div>
          ) : (
            <p>Countdown expired!</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
      <button className=" h-fit w-fit p-2 pl-8 pr-8 text-white bg-red-500">View All Porducts</button></div>
    </div>
  );
};

export default FlashSale;
