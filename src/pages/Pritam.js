import React, { useEffect, useState } from "react";

export default function Pritam() {
  const [thought, setThought] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      const quoteData = {
        text: data.content,
        author: data.author,
        date: new Date().toDateString(),
      };
      localStorage.setItem("dailyQuote", JSON.stringify(quoteData));
      setThought(quoteData.text);
      setAuthor(quoteData.author);
    } catch {
      setThought("Stay positive. Couldn’t fetch today’s quote.");
      setAuthor("— Unknown");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("dailyQuote");
    const today = new Date().toDateString();

    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === today) {
        setThought(parsed.text);
        setAuthor(parsed.author);
        return;
      }
    }

    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-slate-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6">More about Pritam</h1>

      {/* Thought of the Day */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg text-center max-w-xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-2">🌟 Thought of the Day</h2>
        <p className="italic">"{thought}"</p>
        {author && <p className="mt-2 text-sm text-indigo-200">— {author}</p>}
        <p className="text-xs mt-1 text-indigo-300">*Updated daily via Quotable API</p>
      </div>

      {/* Under Construction */}
      <div className="text-center mt-10 animate-pulse">
        <p className="text-lg font-medium">🚧 This page is under construction...</p>
        <p className="text-sm mt-2 text-gray-500 dark:text-gray-300">
          I’m working on something amazing here. Stay tuned for more!
        </p>
      </div>
    </div>
  );
}
