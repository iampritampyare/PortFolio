import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Navbar({ setPage, darkMode, setDarkMode }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white dark:from-slate-900 dark:to-slate-800">
      <div className="w-1/3 text-left">
        <button onClick={() => setPage("pritam")} className="font-semibold hover:text-yellow-400 transition">
          Pritam
        </button>
      </div>
      <div className="w-1/3 text-center">
        <button onClick={() => setPage("home")} className="font-semibold hover:text-yellow-400 transition">
          Home
        </button>
      </div>
      <div className="w-1/3 flex justify-end items-center space-x-4">
        <button onClick={() => setPage("contact")} className="font-semibold hover:text-yellow-400 transition">
          Contact Me
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 rounded-full hover:text-yellow-400 transition"
        >
          {darkMode ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
