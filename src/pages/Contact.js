import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const contactItems = [
  {
    icon: <FaGithub size={32} />,
    name: "GitHub",
    link: "https://github.com/iampritampyare",
  },
 
  
  {
    icon: <FaFilePdf size={32} />,
    name: "Resume",
    link: "https://drive.google.com/file/d/1ipja5134NL5n_LxeEYULtC8vrsy23KcU/view?usp=sharing",
  },
  {
    icon: <SiLeetcode size={32} />,
    name: "LeetCode",
    link: "https://leetcode.com/u/iampritampyare/",
  },
  
  {
    icon: <FaLinkedin size={32} />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pritam-kumar-pattanayak-568b2623b/",
  },
  {
    icon: <FaTwitter size={32} />,
    name: "X (Twitter)",
    link: "https://x.com/iampritampyare",
  },
  {
    icon: <SiGeeksforgeeks size={32} />,
    name: "GFG",
    link: "https://www.geeksforgeeks.org/user/iampritampyare/",
  },
];

export default function Contact() {
  
  return (
    <div className="text-center bg-white dark:bg-slate-900 text-black dark:text-white">

      <h1 className="text-3xl font-semibold mb-8 text-indigo-700">Connect with Me</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center mb-10">
        {contactItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-indigo-700 hover:text-indigo-900 transition"
          >
            {item.icon}
            <span className="mt-2 text-sm">{item.name}</span>
          </a>
        ))}
      </div>
      <div className="text-gray-700 text-sm">
        <p><strong>Phone:</strong> +91 8114998567</p>
        <p><strong>Email:</strong> pritamkp456@gmail.com</p>
        <p><strong>Outlook:</strong> pritamkp456@outlook.com</p>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">More Links</h2>
        <ul className="text-sm text-gray-600">
          All Other Projects are comming soon on home page
          {/* <li><strong>Link 1:</strong> Coming Soon</li>
          <li><strong>Link 2:</strong> Coming Soon</li>
          <li><strong>Link 3:</strong> Coming Soon</li> */}
        </ul>
      </div>
            <div className="mt-10 px-4 sm:px-10">
        <blockquote className="text-center italic text-lg text-indigo-400 border-l-4 border-indigo-500 pl-4">
          <p>
            <strong>Physics and Math isn't just a subject — it's love ❤️</strong><br />
            Ask me any formula — maybe I won’t be able to solve it, maybe I can’t even explain it fully…<br />
            But teach me a formula, and I promise —<br />
            I’ll tell you exactly where it belongs in real life.
          </p>
          <p className="mt-4">
            Because theory fades, but application stays.<br />
            <span className="font-semibold">That’s real understanding.</span>
          </p>
          <footer className="mt-2 text-right text-sm text-indigo-300">— Pritam</footer>
        </blockquote>
      </div>

    </div>
  );
}
