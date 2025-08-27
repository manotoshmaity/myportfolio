import React from "react";
import { motion } from "framer-motion";
import {
  FaMicrochip,   // Intel
  FaReact,       // MERN
  FaCloud,       // IBM Cloud
  FaCube,        // Blockchain
} from "react-icons/fa";

const experiences = [
  {
    title: "Intel Industrial Training",
    company: "Intel",
    date: "Jan 2025 – Feb 2025",
    description: [
      "Worked on Visual Language Model (VLM) project, focusing on a visual search engine.",
      "Collaborated with researchers on computer vision & NLP for multimodal learning.",
      "Implemented model training, fine-tuning, and evaluation pipelines.",
    ],
    icon: <FaMicrochip size={22} />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "MERN Stack Development",
    company: "Euphoria",
    date: "24th Jun 2025 – Ongoing",
    description: [
      "Hands-on training in MongoDB, Express.js, React.js, and Node.js.",
      "Built scalable full-stack web applications with interactive UI/UX.",
    ],
    icon: <FaReact size={22} />,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "IBM TECHNOVATE Workshop & IBM Cloud Training",
    company: "IBM",
    date: "01 Apr – 02 Apr 2025",
    description: [
      "2-day workshop on IBM Watson and AI-powered solutions.",
      "3-day training on IBM Cloud deployment & microservices.",
    ],
    icon: <FaCloud size={22} />,
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Internship Bootcamp on Blockchain, Big Data & Data Science",
    company: "NIELIT Kolkata",
    date: "09 Aug – 23 Aug 2025",
    description: [
      "Practical training on Blockchain fundamentals.",
      "Worked with Big Data tools & Data Science workflows.",
    ],
    icon: <FaCube size={22} />,
    color: "from-yellow-400 to-orange-500",
  },
];

export default function WorkExperience() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Work Experience.
        </motion.h2>

        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          A journey through my industrial trainings, workshops, and internships —
          showcasing hands-on learning, teamwork, and building real-world projects.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Middle line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 flex w-full ${
                index % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
              }`}
            >
              <div className="relative w-1/2">
                {/* Icon stays on line - always visible */}
                <span
                  className={`absolute top-5  ${
                    index % 2 === 0 ? "-right-[35px]" : "-left-[35px]"
                  } flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
                >
                  {exp.icon}
                </span>

                {/* Card */}
                <div className="bg-[#14172A] p-6 m-5 rounded-2xl shadow-lg hover:scale-[1.02] transform transition duration-300">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                  <p className="text-sm italic mt-1 text-gray-500">{exp.date}</p>
                  <ul className="mt-3 space-y-2 text-gray-300 text-sm list-disc list-inside">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
