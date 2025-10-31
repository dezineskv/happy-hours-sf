"use client";
import { useState } from "react";
import Image from "next/image";
import "@/app/globals.css";

export default function Home() {
  const defaultMap =
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25224.962222864982!2d-122.43684581025151!3d37.78722092048541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shappy%20hours%20in%20san%20francisco%20open%20right%20now!5e0!3m2!1sen!2sus!4v1761887011419!5m2!1sen!2sus";
  const [mapSrc, setMapSrc] = useState(defaultMap);

  const maps = {
    happy: defaultMap,
    beer: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25227.065638934848!2d-122.42923143342796!3d37.78105830424499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbeer%20happy%20hour%20in%20san%20francisco!5e0!3m2!1sen!2sus!4v1761886934777!5m2!1sen!2sus",
    martini:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25227.064414995977!2d-122.42914558659196!3d37.78106189040622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scocktail%20happy%20hour%20in%20san%20francisco!5e0!3m2!1sen!2sus!4v1761886902355!5m2!1sen!2sus",
    burger:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12613.361930697303!2d-122.42117433889476!3d37.78205970678636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shappy%20hour%20near%20me%20with%20food!5e0!3m2!1sen!2sus!4v1761886824017!5m2!1sen!2sus",
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-8 bg-white dark:bg-black sm:items-start">
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQFzuRKmogW48w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1713809866122?e=1763596800&v=beta&t=6lpzOdlRwbgYO16FO-Zg51ugpRuFG54HIGk2NWibXw0"
                  alt="icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQG1lf7Slhr0TQ/profile-displayphoto-shrink_100_100/B56ZR7DkHKH0AY-/0/1737231320335?e=1763596800&v=beta&t=z4dCZiHNx4m27fCIxHE2kEXJdalCwgwmb9lT5T1aQao"
                  alt="icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://media.licdn.com/dms/image/v2/C4D03AQF5Mq75SmCCCA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517041519570?e=1763596800&v=beta&t=r_6XEfgpDwE1G8Nu1SGHPrhWyiUUg-lFDWkAo_bsGnY"
                  alt="icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <Image
                  src="https://media.licdn.com/dms/image/v2/C5603AQGJgBpJVLQwQw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516815131408?e=1763596800&v=beta&t=N8hJOZkB4d4DHbGK8etnN2vOAWV5Iv_qvA1zQJrK-qo"
                  alt="icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Happy Hours!
            </h1>
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

          <div className="flex flex-row gap-4 text-base font-medium pt-6">
            <button
              onClick={() => setMapSrc(maps.happy)}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-900"
              aria-label="Show happy spots"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </button>

            <button
              onClick={() => setMapSrc(maps.beer)}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-900"
              aria-label="Show beer spots"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </button>

            <button
              onClick={() => setMapSrc(maps.martini)}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-900"
              aria-label="Show martini spots"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </button>

            <button
              onClick={() => setMapSrc(maps.burger)}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-900"
              aria-label="Show burger spots"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </button>
          </div>
        </main>
      </div>
    </>
  );
}