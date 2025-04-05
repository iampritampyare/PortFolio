import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pritam from "./pages/Pritam";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = React.useState("home");

  const renderPage = () => {
    if (page === "pritam") return <Pritam />;
    if (page === "contact") return <Contact />;
    return <Home />;
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
