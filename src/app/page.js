"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
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

  const defaultMap =
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25226.562122423937!2d-122.41141763799904!3d37.78253359142535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shappy%20hour%20san%20francisco!5e0!3m2!1sen!2sus!4v1761891857189!5m2!1sen!2sus";
  const [mapSrc, setMapSrc] = useState(defaultMap);

  const maps = {
    happy: defaultMap,
    beer: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25227.065635933535!2d-122.42923143342796!3d37.78105830424499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbeer%20happy%20hour%20in%20san%20francisco!5e0!3m2!1sen!2sus!4v1761886934777!5m2!1sen!2sus",
    martini:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25227.064414995977!2d-122.42914558659196!3d37.78106189040622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scocktail%20happy%20hour%20in%20san%20francisco!5e0!3m2!1sen!2sus!4v1761886902355!5m2!1sen!2sus",
    wine: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25224.964671216356!2d-122.43701750261549!3d37.78721374776985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swine%20happy%20hour%20in%20san%20francisco%20open%20right%20now!5e0!3m2!1sen!2sus!4v1761888752731!5m2!1sen!2sus",
    burger:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12613.361930697303!2d-122.42117433589476!3d37.78205970678636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shappy%20hour%20near%20me%20with%20food!5e0!3m2!1sen!2sus!4v1761886824017!5m2!1sen!2sus",
    trash:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25224.965895391888!2d-122.43710333579749!3d37.78721016141223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbars%20in%20san%20francisco%20open%20right%20now!5e0!3m2!1sen!2sus!4v1761889137299!5m2!1sen!2sus",
    dine: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25224.967119567278!2d-122.4371891949795!3d37.78720657505475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants%20open%20near%20me!5e0!3m2!1sen!2sus!4v1761890308403!5m2!1sen!2sus",
  };
  return (
    <>
      <Nav />
      <div className="flex min-h-screen flex-col items-center justify-center font-sans dark:bg-black">
        <h1 className="max-w-xl text-3xl pt-6 font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Happy Hour Management
        </h1>
        <p>{today}</p>
        {/* <button
          onClick={() => calculateTimeUntil6PM()}
          className="bg-red-600 px-2 py-1 text-sm rounded-lg text-white"
        >
   Refresh
 </button> */}
<p className="text-red-900 animate-bounce">{timeRemaining}</p>
<button
  onClick={() => setTimeRemaining(calculateTimeUntil6PM())}
  className="bg-red-600 px-2 py-1 text-sm rounded-lg text-white"
>
  Refresh Timer
</button>
        <main className="flex w-full max-w-3xl sm:gap-4 flex-wrap flex-row items-center justify-center pt-4 px-8 bg-white dark:bg-black sm:items-start">
          <div className="flex flex-row items-center justify-between gap-6 text-center sm:items-start sm:text-left">
            {/* buttons */}
            <div className="flex flex-row items-center justify-between text-base font-medium py-2 gap-2">
              <button
                onClick={() => setMapSrc(maps.happy)}
                className="px-2 py-1 border border-1-black rounded hover:bg-gray-300 dark:hover:bg-zinc-900 active:bg-gray-500"
                aria-label="Show happy spots"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-smile-icon lucide-smile"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
                <span className="text-xs">HH</span>
              </button>

              <button
                onClick={() => setMapSrc(maps.beer)}
                className="px-2 py-1 border border-1-black rounded hover:bg-gray-300 dark:hover:bg-zinc-900 active:bg-gray-500"
                aria-label="Show beer spots"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-beer-icon lucide-beer"
                >
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
                  <path d="M9 12v6" />
                  <path d="M13 12v6" />
                  <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
                  <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
                </svg>
                <span className="text-xs">Beer</span>
              </button>

              <button
                onClick={() => setMapSrc(maps.martini)}
                className="px-2 py-1 border border-1-black rounded hover:bg-gray-300 dark:hover:bg-zinc-900 active:bg-gray-500"
                aria-label="Show martini spots"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-martini-icon lucide-martini"
                >
                  <path d="M8 22h8" />
                  <path d="M12 11v11" />
                  <path d="m19 3-7 8-7-8Z" />
                </svg>
                <span className="text-xs">Drinks</span>
              </button>

              <button
                onClick={() => setMapSrc(maps.wine)}
                className="px-2 py-1 border border-1-black rounded hover:bg-gray-300 dark:hover:bg-zinc-900 active:bg-gray-500"
                aria-label="Show wine spots"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-wine-icon lucide-wine"
                >
                  <path d="M8 22h8" />
                  <path d="M7 10h10" />
                  <path d="M12 15v7" />
                  <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
                </svg>
                <span className="text-xs">Wine</span>
              </button>

              <button
                onClick={() => setMapSrc(maps.burger)}
                className="px-2 py-1 border border-1-black rounded hover:bg-gray-300 dark:hover:bg-zinc-900 active:bg-gray-500"
                aria-label="Show burger spots"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hamburger-icon lucide-hamburger"
                >
                  <path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" />
                  <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" />
                  <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" />
                  <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
                </svg>
                <span className="text-xs">Snacks</span>
              </button>
            </div>

            {/* after happy hour */}
            <div className="flex flex-row gap-1 items-center justify-between text-base font-medium py-2 ">
              <button
                onClick={() => setMapSrc(maps.trash)}
                className="px-2 py-1 border border-1-black rounded hover:bg-gray-300 dark:hover:bg-zinc-900 active:bg-gray-500"
                aria-label="Show open bars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-martini-icon lucide-martini text-blue-500"
                >
                  <path d="M8 22h8" />
                  <path d="M12 11v11" />
                  <path d="m19 3-7 8-7-8Z" />
                </svg>
                <span className="text-xs">Bars</span>
              </button>
              <button
                onClick={() => setMapSrc(maps.dine)}
                className="px-2 py-1 border border-1-black rounded hover:bg-gray-300 dark:hover:bg-zinc-900 active:bg-gray-500"
                aria-label="Show open restaurants"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chef-hat-icon lucide-chef-hat text-blue-500"
                >
                  <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                  <path d="M6 17h12" />
                </svg>
                <span className="text-xs">Food</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-base mt-2 py-2 sm:max-w-sm md:max-w-3xl">
            <iframe
              src={mapSrc}
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow-md"
              title="maps"
            ></iframe>
          </div>
        </main>
        <div className="flex w-full max-w-2xl flex-col items-center justify-center py-10 px-8 bg-white dark:bg-black mx-auto">
          <div className="avatar-group -space-x-6 mb-6">
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQFzuRKmogW48w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1713809866122?e=1763596800&v=beta&t=6lpzOdlRwbgYO16FO-Zg51ugpRuFG54HIGk2NWibXw0"
                  alt="icon"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQG1lf7Slhr0TQ/profile-displayphoto-shrink_100_100/B56ZR7DkHKH0AY-/0/1737231320335?e=1763596800&v=beta&t=z4dCZiHNx4m27fCIxHE2kEXJdalCwgwmb9lT5T1aQao"
                  alt="icon"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://media.licdn.com/dms/image/v2/C4D03AQF5Mq75SmCCCA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517041519570?e=1763596800&v=beta&t=r_6XEfgpDwE1G8Nu1SGHPrhWyiUUg-lFDWkAo_bsGnY"
                  alt="icon"
                  width={35}
                  height={35}
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://media.licdn.com/dms/image/v2/C5603AQGJgBpJVLQwQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516815131408?e=1763596800&v=beta&t=N8hJOZkB4d4DHbGK8etnN2vOAWV5Iv_qvA1zQJrK-qo"
                  alt="icon"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>{" "}
          <div className="text-center mx-auto">
            Don't forget&nbsp;
            <span className="font-bold">
              Keys, phone, credit card, wallet, purse, jacket, scarf, hat,
              earbuds, umbrella, backpack, food, etc.
            </span>
            <p className="text-sm mt-4">
              Myth? Beer before wine, and you'll feel fine. Liquor before beer,
              you're in the clear
            </p>
            <p className="text-sm text-left mt-4">
              <span className="font-bold pb-2">1-2-3 rule for moderation</span>
              <br />
              <span className="font-bold">1</span> drink per hour: Allows your
              body time to metabolize alcohol. <br />
              <span className="font-bold">2</span> drinks per occasion: Limits
              consumption during a single event. <br />
              <span className="font-bold">3</span> drinks per day: A cap to
              reduce health risks, though it's often suggested that some days
              should have no alcohol at all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
