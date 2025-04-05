import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pritam from "./pages/Pritam";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const renderPage = () => {
    if (page === "pritam") return <Pritam />;
    if (page === "contact") return <Contact />;
    return <Home />;
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <Navbar setPage={setPage} darkMode={darkMode} setDarkMode={setDarkMode} />
      {renderPage()}
    </div>
  );
}

export default App;
