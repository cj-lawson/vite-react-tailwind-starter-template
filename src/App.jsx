import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "/tailwind.svg";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Delete */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden bg-[#1B1B1F]">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4DC7FD] to-[#4DC7FD] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#4DC7FD]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
          <svg
            viewBox="0 0 1113 440"
            aria-hidden="true"
            className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
          >
            <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
          </svg>
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-row items-center space-x-12">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src={viteLogo} className="w-16 md:w-20" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="w-16 md:w-20" alt="React logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img
                src={tailwindLogo}
                className="w-16 md:w-20"
                alt="tailwind logo"
              />
            </a>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Vite + React + Tailwind Starter Template
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="text-white bg-[#32363F] px-7 py-2.5 rounded-md"
            >
              count is {count}
            </button>
          </div>
        </div>
      </main>
      {/* Delete */}
    </>
  );
}

export default App;
