import React from "react";

export default function Education() {
  return (
    <section
      className="relative py-16 px-6 bg-white bg-center bg-no-repeat bg-contain animate-fade-in"
      style={{ backgroundImage: "url('/usf-logo.png')" }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg max-w-3xl mx-auto p-8 transition transform hover:scale-[1.02] hover:shadow-xl duration-500">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-4">Education</h2>
        <h3 className="text-xl font-semibold text-green-700">University of South Florida</h3>
        <p className="text-gray-800 mt-2">B.S. in Information Technology</p>
        <p className="text-gray-500">Expected Graduation: May 2026</p>
        <p className="text-gray-600 mt-4">
          Passionate about data analytics, cloud technologies, and scalable systems.
        </p>
      </div>
    </section>
  );
}
