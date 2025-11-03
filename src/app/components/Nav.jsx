import React from 'react'
import Image from 'next/image'

function Nav() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                href="https://weather.com/weather/hourbyhour/l/217925daf9c672edad52f0b45157a0c4ea0618ff0385f049bb0aecc21d7f3710"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900"
              >
                Weather
              </a>
            </li>
            <li>
              <details>
                <summary>Articles</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a
                      href="https://www.britannica.com/event/Prohibition-United-States-history-1920-1933"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-900"
                    >
                      Prohibition Era
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.theinfatuation.com/san-francisco/guides/best-happy-hour-san-francisco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-900"
                    >
                      Top 21 Happy Hours SF
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sf.eater.com/maps/best-happy-hours-bars-san-francisco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-900"
                    >
                      Eater SF Happy Hours
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.totalhappyhour.com/san-francisco-ca-happy-hour/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-900"
                    >
                      Total Happy Hour SF
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.byrdie.com/healthiest-alcoholic-drinks-5183917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-900"
                    >
                      Healthiest Alcoholic Drinks
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://my.clevelandclinic.org/health/diseases/16627-hangover"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-900"
                    >
                      Hangovers
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image
              src="https://i.pinimg.com/originals/88/84/8d/88848d2067d622de8e4f314e28dc431a.gif"
              alt="Logo"
              width={42}
              height={22}
            />
          </a>
        </div>
        {/* desktop */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="https://weather.com/weather/hourbyhour/l/217925daf9c672edad52f0b45157a0c4ea0618ff0385f049bb0aecc21d7f3710"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900"
              >
                Weather
              </a>
            </li>
            <li>
              <details>
                <summary>Articles</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a
                      href="https://www.britannica.com/event/Prohibition-United-States-history-1920-1933"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900"
                    >
                      Prohibition Era
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25226.562122423937!2d-122.41141763799904!3d37.78253359142538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shappy%20hour%20san%20francisco!5e0!3m2!1sen!2sus!4v1761891857189!5m2!1sen!2sus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900"
                    >
                      Top 21 Happy Hours SF
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://sf.eater.com/maps/best-happy-hours-bars-san-francisco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900"
                    >
                      Eater SF Happy Hours
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.totalhappyhour.com/san-francisco-ca-happy-hour/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900"
                    >
                      Total Happy Hour SF
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.byrdie.com/healthiest-alcoholic-drinks-5183917"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900"
                    >
                      Healthiest Alcoholic Drinks
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://my.clevelandclinic.org/health/diseases/16627-hangover"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900"
                    >
                      Hangovers
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav