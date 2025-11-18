import React from "react";
import Image from "next/image";

function Avatars() {
  return (
    <div className="flex min-w-screen flex-col items-center justify-center py-10 sm:px-8 bg-background dark:bg-black mx-auto">
      <div className="avatar-group -space-x-6 mb-6">
        <div className="avatar">
          <div className="w-12">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQERGziIVdRaWA/profile-displayphoto-scale_100_100/B56ZpRO3ghIcAc-/0/1762299446258?e=1764806400&v=beta&t=gSNAx2NZ__SGkMNmVxJr0HsnoQt5MS7Tv5A6Ad2SKOQ"
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
      </div>
      {/* reminders */}
      <div className="text-center mx-auto sm:px-8 sm:mx-8">
        <p className="text-sm text-white mt-4 px-8">
          Don't forget&nbsp;
          <span className="font-bold">
            Keys, phone, credit card, wallet, purse, jacket, scarf, hat,
            earbuds, umbrella, backpack, food, etc.
          </span>
        </p>
        <p className="text-sm mt-4 px-8">
          Myth? Beer before wine, and you'll feel fine. Liquor before beer,
          you're in the clear
        </p>
        <p className="text-sm text-left mt-4 px-8">
          <span className="font-bold pb-2">1-2-3 rule for moderation</span>
          <br />
          <span className="font-bold">1</span> drink per hour: Allows your body
          time to metabolize alcohol. <br />
          <span className="font-bold">2</span> drinks per occasion: Limits
          consumption during a single event. <br />
          <span className="font-bold">3</span> drinks per day: A cap to reduce
          health risks, though it's often suggested that some days should have
          no alcohol at all.
        </p>
        <div className="sharethis-inline-reaction-buttons mt-6 h-20"></div>
      </div>
    </div>
  );
}

export default Avatars;
