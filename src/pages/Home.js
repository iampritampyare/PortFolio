import React from "react";
import {
  FaPython, FaDatabase, FaGitAlt, FaGithub, FaLinux,
} from "react-icons/fa";
import {
  SiDjango, SiFlask, SiMysql, SiPostgresql,
} from "react-icons/si";

export default function Home({ setPage }) {
  return (
    <div className="p-6 max-w-5xl mx-auto scroll-smooth">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-2">Welcome to My Portfolio</h1>

      {/* Scroll Navigation */}
      <div className="flex justify-center gap-6 mb-10 text-sm sm:text-base font-medium">
        <a href="#techstack" className="hover:underline hover:text-indigo-400 transition-all duration-200">💻Tech Stack</a>
        <a href="#projects" className="hover:underline hover:text-indigo-400 transition-all duration-200">📂Projects</a>
        <a href="#experience" className="hover:underline hover:text-indigo-400 transition-all duration-200">💼Experience</a>
      </div>

      {/* Tech Stack */}
      <section id="techstack" className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2">
          💻 Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-indigo-400 dark:text-indigo-300 text-sm">
          <div className="flex items-center space-x-2"><FaPython size={20} /><span>Python</span></div>
          <div className="flex items-center space-x-2"><SiDjango size={20} /><span>Django</span></div>
          <div className="flex items-center space-x-2"><SiFlask size={20} /><span>Flask (REST)</span></div>
          <div className="flex items-center space-x-2"><FaDatabase size={20} /><span>SQL</span></div>
          <div className="flex items-center space-x-2"><SiPostgresql size={20} /><span>PostgreSQL</span></div>
          <div className="flex items-center space-x-2"><SiMysql size={20} /><span>MySQL</span></div>
          <div className="flex items-center space-x-2"><FaGithub size={20} /><span>GitHub</span></div>
          <div className="flex items-center space-x-2"><FaGitAlt size={20} /><span>Git</span></div>
          <div className="flex items-center space-x-2"><FaLinux size={20} /><span>Linux</span></div>
          <div className="flex items-center space-x-2"><span className="text-xl">🧠</span><span>AI/ML</span></div>
          <div className="flex items-center space-x-2"><span className="text-xl">💠</span><span>C++</span></div>
          <div className="flex items-center space-x-2"><span className="text-xl">🚦</span><span>Streamlit</span></div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2">
          📂 Projects </h2>
        <ul className="space-y-6">
          <li>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold">
                MCQForge <span className="text-sm italic font-normal text-gray-400 dark:text-gray-300">— Mar 2024 – Present</span>
              </h3>
              <a
                href="https://github.com/iampritampyare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 hover:underline animate-pulse text-sm"
              >
                [LINK]
              </a>
            </div>
            <p className="mb-1"><strong>Tech:</strong> Django, REST API, PostgreSQL, AI/ML</p>
            <p className="mb-2"><strong>Aim:</strong> Build an MCQ platform for 8th–10th CHSE (Odia Medium) students to practice objective-type questions efficiently.</p>
            <ul className="list-disc pl-6 space-y-1 text-sm leading-relaxed">
              <li>Django was used to manage structured backend logic and admin control.</li>
              <li>REST APIs allow the frontend to fetch/save questions and user sessions smoothly.</li>
              <li>PostgreSQL stores user details, categorized MCQs by subject, chapter, and difficulty.</li>
              <li>AI/ML modules scan and extract questions from uploaded papers using basic NLP and CV techniques.</li>
            </ul>
          </li>

          <li>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">
                Movie Recommender System <span className="text-sm italic font-normal text-gray-400 dark:text-gray-300">— 2023</span>
              </h3>
              <a href="https://github.com/iampritampyare" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 hover:underline animate-pulse text-sm">[LINK]</a>
            </div>
            <p><strong>Tech:</strong> Python, Pandas, Scikit-learn</p>
            <p><strong>Aim:</strong> Build a smart movie recommendation system using collaborative filtering.</p>
            <ul className="list-disc pl-6 space-y-1 text-sm leading-relaxed">
              <li>Implemented collaborative filtering logic with Pandas + cosine similarity.</li>
              <li>Handled data pre-processing for ratings, genres, and user preferences.</li>
              <li>Built local user test system to showcase suggestions live.</li>
            </ul>
          </li>

          <li>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold">
                Gas Detection System <span className="text-sm italic font-normal text-gray-400 dark:text-gray-300">— 2022</span>
              </h3>
              <a
                href="https://drive.google.com/drive/folders/1ie5ESzG9GS3w8BCxKcBktLZLnBtrbvEv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 hover:underline animate-pulse text-sm"
              >
                [LINK]
              </a>
            </div>
            <p className="mb-1"><strong>Tech:</strong> C++, Arduino Uno, MQ-2 Gas Sensor, ESP8266 Node MCU WiFi Dev Board</p>
            <p className="mb-2"><strong>Aim:</strong> Design a real-time gas detection and environmental safety system for use in smart waste monitoring and fire detection—even under adverse weather conditions.</p>
            <ul className="list-disc pl-6 space-y-1 text-sm leading-relaxed">
              <li>Used Arduino Uno for microcontroller-based hardware control.</li>
              <li>Integrated MQ-2 sensor to detect flammable gases or odor in the environment.</li>
              <li>Enabled remote monitoring via ESP8266 Node MCU WiFi module.</li>
              <li>System detects odor from dustbins and fire risks even in rainy conditions.</li>
              <li>Data visualized through a custom dashboard resembling Arduino IDE for live feedback.</li>
              <li>Demonstrated proficiency in embedded systems, real-time monitoring, and IoT automation.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2">
        💼 Experience</h2>
        <h3 className="font-bold">
          IVAPLUS Internship — FTBI, NIT Rourkela
          <span className="text-sm italic font-normal text-gray-400 dark:text-gray-300"> — Dec 2024 – Present</span>
        </h3>
        <p className="mt-2 mb-1"><strong>Role:</strong> Backend Developer & AI/ML Engineer (Intern)</p>
        <ul className="list-disc pl-6 space-y-1 text-sm leading-relaxed">
          <li>Developed secure and scalable REST APIs using <strong>Flask</strong> and Python-based backend architecture.</li>
          <li>Managed question data, evaluation results, and scoring logs with <strong>SQL databases</strong> (SQL).</li>
          <li>Ensured backend reliability and performance for real-time answer checking at scale.</li>
          <li>Built an answer evaluation system for long-type answers using <strong>cosine similarity</strong> and custom <strong>AI/ML logic</strong>.</li>
        </ul>
      </section>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed list-none space-y-1 text-sm italic leading-relaxed">
        <li>Aiming to become an AI/ML Engineer and Data Scientist, I explore real-world ideas through hands-on projects.</li>
        <li>I continuously use tools like ChatGPT to brainstorm, debug, and turn concepts into reality — because learning never stops.</li>
        <li>With a strong foundation in Mathematics and Physics, I enjoy exploring how their principles can be applied to real-world challenges. I combine this passion with my software engineering skills to build intelligent and practical solutions.</li>
      </p>


      {/* Footer */}
      <footer className="mt-16">
        <div className="rounded-xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-6 text-white text-center">
          <h2 className="text-xl font-bold mb-2">🤝 Let's Connect</h2>
          <p className="mb-4 text-sm">Open to opportunities, collaborations, or just a good tech chat.</p>
          <button onClick={() => setPage("contact")} className="bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Contact Me
          </button>

        </div>
      </footer>
    </div>

  );
}
