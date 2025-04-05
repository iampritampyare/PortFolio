import React from "react";

export default function Navbar({ setPage }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-indigo-700 text-white">
      <div className="text-2xl font-bold">Pritam</div>
      <div className="space-x-4">
        <button onClick={() => setPage("home")} className="hover:underline">Home</button>
        <button onClick={() => setPage("pritam")} className="hover:underline">Pritam</button>
        <button onClick={() => setPage("contact")} className="hover:underline">Contact Me</button>
      </div>
    </nav>
  );
}
