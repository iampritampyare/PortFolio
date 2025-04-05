import React from "react";

export default function Home() {
 
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">

      <h1 className="text-3xl font-semibold mb-4">Welcome to My Portfolio</h1>
      <section className="mb-6">
        <h2 className="text-xl font-bold">Projects</h2>
        <p>Project 1, Project 2 (Add real content here)</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold">College</h2>
        <p>Your college information here</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold">Tech Stack</h2>
        <p>React, Django, Python, SQL, etc.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Experience</h2>
        <p>IVAPLUS internship details</p>
      </section>
    </div>
  );
}
