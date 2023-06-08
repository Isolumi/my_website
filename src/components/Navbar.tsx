import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-red w-100 flex justify-center">
      <div className="min-w-[720px] w-[1280px] flex justify-start items-center p-4 bg-white">

        <div className="flex justify-center w-2/12 max-w-[250px] min-w-[250px]">
          <Link to="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap font-serif dark:text-black">
              Isolumi
            </span>
          </Link>
        </div>
        
        <div className="w-7/12 min-w-[500px] max-w-[1000px] mr-[20px] content-center">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 
              focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600"
                placeholder="Search :)"
                required
              />
              <button
                type="submit"
                className="text-black absolute right-2.5 bottom-2.5 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none 
              focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-[150px] min-w-[150px] ml-auto flex justify-between">
          <Link to="/resume">
            Resume
          </Link>
          <Link to="/my-projects">
            My Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
