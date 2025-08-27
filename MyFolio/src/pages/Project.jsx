"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectData = [
    {
      title: "Vision-Language Model (VLM)",
      description:
        "A cutting-edge AI model integrating computer vision and natural language processing, enabling image-text understanding and multimodal learning applications.",
      image: "/vlm_project.png", // replace with your VLM screenshot path
      github: "https://github.com/manotoshmaity/VLM-zero-shot-classification",
    },
    {
      title: "HostelMate System",
      description:
        "A smart hostel management system with features like room allocation, complaint tracking, digital notice boards, visitor management, and student compatibility matching.",
      image: "/hostelmate_project.png", // replace with your HostelMate screenshot path
      github: "https://github.com/manotoshmaity/Smart_Hostel_System_HostelMate",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-10 py-20">
      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
      >
        My Projects
        
      </motion.h2>

      {/* Description under heading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
      >
        Here are some of my featured works showcasing expertise in Artificial
        Intelligence, Full-Stack Development, and Smart System Design. Each
        project highlights my ability to integrate creativity, problem-solving,
        and technical skills to build impactful solutions.
      </motion.p>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-12">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="relative group bg-white/10 backdrop-blur-lg p-9 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform duration-500"
          >
            {/* GitHub Icon */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              <FaGithub className="text-2xl" />
            </a>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="overflow-hidden rounded-xl mb-6"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            {/* Title & Description */}
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold mb-4"
            >
              {project.title}
            </motion.h3>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 leading-relaxed"
            >
              {project.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
