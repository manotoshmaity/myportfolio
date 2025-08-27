// import { motion } from "framer-motion";
// import {
//   FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
//   FaDatabase, FaFigma, FaCogs, FaNetworkWired
// } from "react-icons/fa";
// import {
//   SiC, SiMongodb, SiMysql, SiTensorflow, SiPytorch,
//   SiNumpy, SiOpencv, SiScikitlearn, SiDjango, SiExpress,
//   SiRedux, SiTailwindcss, SiBootstrap, SiGit, SiGithub
// } from "react-icons/si";

// export default function Skills() {
//   // ✅ Skills with icons
//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       skills: [
//         { name: "C", icon: <SiC className="text-blue-400" /> },
//         { name: "Python", icon: <FaPython className="text-yellow-400" /> },
//         { name: "Java", icon: <FaJava className="text-red-500" /> },
//         { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
//       ],
//     },
//     {
//       title: "Web Development",
//       skills: [
//         { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//         { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//         { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
//         { name: "React", icon: <FaReact className="text-cyan-400" /> },
//         { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
//         { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//         { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//         { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//         { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
//         { name: "Django", icon: <SiDjango className="text-green-600" /> },
//         { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
//         { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" /> },
//         { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
//       ],
//     },
//     {
//       title: "Machine Learning / AI",
//       skills: [
//         { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
//         { name: "PyTorch", icon: <SiPytorch className="text-red-400" /> },
//         { name: "Scikit-Learn", icon: <SiScikitlearn className="text-yellow-400" /> },
//         { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
//         { name: "OpenCV", icon: <SiOpencv className="text-green-300" /> },
//       ],
//     },
//     {
//       title: "Core CS Subjects",
//       skills: [
//         { name: "Operating System", icon: <FaCogs className="text-gray-400" /> },
//         { name: "DBMS", icon: <FaDatabase className="text-purple-400" /> },
//         { name: "Computer Networks", icon: <FaNetworkWired className="text-cyan-400" /> },
//         { name: "Compiler Design", icon: <FaCogs className="text-gray-500" /> },
//         { name: "DSA", icon: <FaCogs className="text-red-300" /> },
//       ],
//     },
//     {
//       title: "Tools & Version Control",
//       skills: [
//         { name: "Git", icon: <SiGit className="text-orange-500" /> },
//         { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
//       ],
//     },
//   ];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-8 overflow-hidden">
//       {/* Skills Content Centered */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//         className="max-w-5xl w-full"
//       >
//         <motion.h2
//           initial={{ y: -40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-5xl font-bold mb-10 text-center"
//         >
//           My <span className="text-blue-400">Skills</span>
//         </motion.h2>

//         {/* Categories */}
//         <div className="space-y-10">
//           {skillCategories.map((category, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.3, duration: 1 }}
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-blue-400 text-center">
//                 {category.title}
//               </h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {category.skills.map((skill, j) => (
//                   <motion.div
//                     key={j}
//                     whileHover={{ scale: 1.12, rotate: 2 }}
//                     className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition"
//                   >
//                     <div className="text-4xl mb-2">{skill.icon}</div>
//                     <p className="text-sm text-center">{skill.name}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import {
  FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDatabase, FaFigma, FaCogs, FaNetworkWired
} from "react-icons/fa";
import {
  SiC, SiMongodb, SiMysql, SiTensorflow, SiPytorch,
  SiNumpy, SiOpencv, SiScikitlearn, SiDjango, SiExpress,
  SiRedux, SiTailwindcss, SiBootstrap, SiGit, SiGithub
} from "react-icons/si";

export default function Skills() {
  // ✅ Skills with icons
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC className="text-blue-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        // { name: "Django", icon: <SiDjango className="text-green-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
      ],
    },
    {
      title: "Machine Learning / AI",
      skills: [
        // { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
        { name: "PyTorch", icon: <SiPytorch className="text-red-400" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-yellow-400" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
        // { name: "OpenCV", icon: <SiOpencv className="text-green-300" /> },
        // { name: "Matplotlib", icon: <SiMatplotlib className="text-blue-400" /> },
      ],
    },
    {
      title: "Core CS Subjects",
      skills: [
        { name: "Operating System", icon: <FaCogs className="text-gray-400" /> },
        { name: "DBMS", icon: <FaDatabase className="text-purple-400" /> },
        { name: "Computer Networks", icon: <FaNetworkWired className="text-cyan-400" /> },
        { name: "Compiler Design", icon: <FaCogs className="text-gray-500" /> },
        { name: "DSA", icon: <FaCogs className="text-red-300" /> },
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
      ],
    },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen text-white px-8 overflow-hidden">
      {/* 🔹 Animated Background */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* 🔹 Skills Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-5xl w-full"
      >
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-10 text-center"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 1 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.12, rotate: 2 }}
                    className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition"
                  >
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="text-sm text-center">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
