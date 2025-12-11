"use client";
import { useState, useEffect } from "react";
import "@/app/globals.css";
import Link from "next/link";
import Nav from "./components/Nav";
import ThemeToggle from "./components/ThemeToggle";
import Homer from "./components/Home";
import { useTheme } from "next-themes";
import Avatars from "./components/Avatars";
import ImageSlider from "./components/Swiper";

export default function App() {
  const { theme, setTheme } = useTheme();

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeUntil6PM());
  const date = new Date();
  const today = date.toLocaleDateString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  function calculateTimeUntil6PM() {
    const now = new Date();
    const sixPm = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      18,
      0,
      0,
      0
    ); // 18 is 6 PM in 24-hour format

    let diff = sixPm - now; // Difference in milliseconds

    // If the current time is already past 6 PM, calculate until 6 PM tomorrow
    if (diff < 0) {
      sixPm.setDate(sixPm.getDate() + 1); // Add one day
      diff = sixPm - now;
    }

    // Convert the milliseconds difference to hours, minutes, and seconds
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours} hours, ${minutes} minutes, and ${seconds} seconds until 6 PM`;
  }

  // const timeRemaining = calculateTimeUntil6PM();

  useEffect(() => {
    const id = setInterval(() => {
      setTimeRemaining(calculateTimeUntil6PM());
    }, 1000); // update every second
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Nav />
      <div className="flex sm:w-full min-w-screen min-h-screen flex-col items-center justify-center font-sans bg-background ">
        <h1
          className="max-w-xl text-3xl pt-6 font-semibold leading-10 tracking-tight   text-white
  text-shadow: 2px 2px 4px #000000 dark:text-gray-300 mx-auto text-center"
        >
          Happy Hour Management
        </h1>
        <p className="text-white">{today}</p>

        {/* <button
          onClick={() => calculateTimeUntil6PM()}
          className="bg-red-600 px-2 py-1 text-sm rounded-lg text-white"
        >
   Refresh
 </button> */}
        <p className="text-red-900 animate-bounce text-center">
          {timeRemaining}
        </p>
        {/* <button
          onClick={() => setTimeRemaining(calculateTimeUntil6PM())}
          className="bg-red-600 px-2 py-1 text-xs rounded-lg text-foreground"
        >
          Refresh Timer
        </button> */}
        <Homer />
        <ImageSlider />
        <Avatars />
      </div>
    </>
  );
}
