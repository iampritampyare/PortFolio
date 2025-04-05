import React, { useEffect, useState } from "react";

const quotes = [
  { text: "Write code like you're telling a story.", author: "Wisdom Bot" },
  { text: "Curiosity fuels every great discovery.", author: "Wisdom Bot" },
  { text: "Don't wait for inspiration. Code anyway.", author: "Wisdom Bot" },
  { text: "Persistence is what transforms talent into success.", author: "Wisdom Bot" },
  { text: "Solve small problems to build big solutions.", author: "Wisdom Bot" },
  { text: "The best debugger is your future self looking at this code.", author: "Wisdom Bot" },
  { text: "Refactor until your code reads like poetry.", author: "Wisdom Bot" },
  { text: "Every bug is just an opportunity to understand deeper.", author: "Wisdom Bot" },
  { text: "Code your dreams, not just your assignments.", author: "Wisdom Bot" },
  { text: "Learning never stops — especially in tech.", author: "Wisdom Bot" },
  { text: "Great software is built one tiny commit at a time.", author: "Wisdom Bot" },
  { text: "Good habits write clean code.", author: "Wisdom Bot" },
  { text: "Let logic lead, let creativity flow.", author: "Wisdom Bot" },
  { text: "Fail early, fail often, learn always.", author: "Wisdom Bot" },
  { text: "Your errors are proof you're trying.", author: "Wisdom Bot" },
  { text: "Let each line teach you something.", author: "Wisdom Bot" },
  { text: "Behind every feature is a hundred tiny wins.", author: "Wisdom Bot" },
  { text: "Ship it. Then improve it.", author: "Wisdom Bot" },
  { text: "You don't need permission to start building.", author: "Wisdom Bot" },
  { text: "Think deeply, build simply.", author: "Wisdom Bot" },
  { text: "Start with why. End with wow.", author: "Wisdom Bot" },
  { text: "Simplicity is the soul of efficiency.", author: "Wisdom Bot" },
  { text: "Your first version is your bravest.", author: "Wisdom Bot" },
  { text: "From idea to impact — one keystroke at a time.", author: "Wisdom Bot" },
  { text: "Even bugs have something to teach.", author: "Wisdom Bot" },
  { text: "Dream in code. Build in steps.", author: "Wisdom Bot" },
  { text: "Great engineers write to be understood.", author: "Wisdom Bot" },
  { text: "Work on problems that excite your brain.", author: "Wisdom Bot" },
  { text: "Start before you're ready.", author: "Wisdom Bot" },
  { text: "Craft your future one commit at a time.", author: "Wisdom Bot" },
  { text: "Consistency beats intensity.", author: "Wisdom Bot" },
  { text: "Stay curious, stay coding.", author: "Wisdom Bot" },
  { text: "Tech is a canvas. Paint wisely.", author: "Wisdom Bot" },
  { text: "Ask why. Then code how.", author: "Wisdom Bot" },
  { text: "Build tools, not walls.", author: "Wisdom Bot" },
  { text: "Real growth begins at discomfort.", author: "Wisdom Bot" },
  { text: "There is elegance in efficient logic.", author: "Wisdom Bot" },
  { text: "Be the reason someone solves something today.", author: "Wisdom Bot" },
  { text: "Today’s effort is tomorrow’s upgrade.", author: "Wisdom Bot" },
  { text: "A few bugs can lead to a breakthrough.", author: "Wisdom Bot" },
  { text: "Don’t wait for the stars, light your own shell.", author: "Wisdom Bot" },
  { text: "Repetition breeds understanding.", author: "Wisdom Bot" },
  { text: "Plan, prototype, perfect.", author: "Wisdom Bot" },
  { text: "Design for humans, not just screens.", author: "Wisdom Bot" },
  { text: "Make it work, then make it shine.", author: "Wisdom Bot" },
  { text: "What you build reflects what you believe.", author: "Wisdom Bot" },
  { text: "Find clarity in complexity.", author: "Wisdom Bot" },
  { text: "Explore, iterate, evolve.", author: "Wisdom Bot" },
  { text: "You debug life the same way — one step at a time.", author: "Wisdom Bot" },
  { text: "Build what you wish existed.", author: "Wisdom Bot" },
  { text: "Let your code outlive your resume.", author: "Wisdom Bot" },
  { text: "Optimism is an underrated dev skill.", author: "Wisdom Bot" },
  { text: "Your learning curve is your launchpad.", author: "Wisdom Bot" },
  { text: "Even slow progress is forward.", author: "Wisdom Bot" },
  { text: "Code is poetry for machines and humans.", author: "Wisdom Bot" },
  { text: "Every genius was once a beginner.", author: "Wisdom Bot" },
  { text: "Let failure refactor you.", author: "Wisdom Bot" },
  { text: "Test not only the code but also your comfort zone.", author: "Wisdom Bot" },
  { text: "Technology rewards the patient explorer.", author: "Wisdom Bot" },
  { text: "Build not for applause, but for purpose.", author: "Wisdom Bot" },
  { text: "You don’t just write code. You design experiences.", author: "Wisdom Bot" },
  { text: "Be proud of small wins. They scale.", author: "Wisdom Bot" },
  { text: "Keep your vision bigger than your fears.", author: "Wisdom Bot" },
  { text: "The compiler doesn't care — but the user does.", author: "Wisdom Bot" },
  { text: "Nothing you build is ever wasted learning.", author: "Wisdom Bot" }
];

export default function Pritam() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    const stored = localStorage.getItem("dailyLocalQuote");
    const today = new Date().toDateString();

    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.date === today) {
        setQuote(parsed);
        return;
      }
    }

    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const withDate = { ...newQuote, date: today };
    localStorage.setItem("dailyLocalQuote", JSON.stringify(withDate));
    setQuote(withDate);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-slate-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6">More about Pritam</h1>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg text-center max-w-xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-2">🌟 Thought of the Day</h2>
        <p className="italic">"{quote.text}"</p>
        <p className="mt-2 text-sm text-indigo-200">— {quote.author}</p>
        <p className="text-xs mt-1 text-indigo-300">*Updated daily</p>
      </div>

      <div className="text-center mt-10 animate-pulse">
        <p className="text-lg font-medium">🚧 This page is under construction...</p>
        <p className="text-sm mt-2 text-gray-500 dark:text-gray-300">
          I’m working on something amazing here. Stay tuned for more!
        </p>
      </div>
    </div>
  );
}
