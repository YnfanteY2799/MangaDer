import { Link } from "react-router-dom";
import { NavbarPropTypes } from "../../types/types";
import { useLocation } from "react-router-dom";
import { HomeChildrends } from "../../pages/pages";
// Types Import
import { NavbarRoute } from "../../types/types";

export default function Navbar({
  isTransparent,
}: NavbarPropTypes): JSX.Element {
  // Constants
  const brand: string = "MangaDer";

  // Hooks
  const { pathname } = useLocation();

  // HookedConstants
  const actualSelected = `/${pathname.split("/")[0]}`;

  return (
    <div className="dark">

      <nav className={`bg-white shadow dark:bg-gray-800`}>

        <div className="container px-6 py-3 mx-auto md:flex">
          <div className="flex items-center justify-between">
            <div>
              <Link
                className="text-sm font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/Home"
              >
                {brand}
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fillCurrent">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full md:flex md:items-center md:justify-between">
            <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
              {HomeChildrends.map(({ path, include }, index) => include === undefined && (
                <Link
                  key={index}
                  to={path}
                  className={
                    "px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
                  }
                >
                  {path}
                </Link>
              ))}
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Search"
              />
            </div>
          </div>



          <div className="flex items-center mt-4 md:mt-0">
            <button
              className="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
              aria-label="show notifications"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="flex items-center focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  className="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>

              <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                Khatab wedaa
              </h3>
            </button>
          </div>
        </div>


      </nav>
    </div>
  );
}

// const brand: string = "マンガデル"; : MangaDer MTL => May think it Later
// Moreless Kanji ダウンローダー : Downloader
