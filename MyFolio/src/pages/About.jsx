
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// 3D Animated Sphere
function FloatingSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#3b82f6"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white px-10 overflow-hidden">
      
      {/* LEFT: 3D Animation */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="flex-1 w-full h-[300px] lg:h-[500px] mb-10 lg:mb-0"
      >
        <Canvas>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
          <FloatingSphere />
        </Canvas>
      </motion.div>

      {/* RIGHT: About Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="flex-1 text-center lg:text-left max-w-2xl"
      >
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 leading-relaxed text-lg mb-6"
        >
          I am <span className="font-semibold text-white">Manotosh Maity</span>, 
          a passionate <span className="text-blue-400">FULL Stack Developer</span> 
          with expertise in{" "}
          <span className="font-semibold">
            C, Python, Java, PHP
          </span>.  
          I enjoy building scalable, user-friendly applications and creating 
          innovative solutions that make a real impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-gray-400 leading-relaxed mb-8"
        >
          My academic interests include{" "}
          <span className="font-semibold">
            Operating Systems, DBMS, Computer Networks, Compiler Design, and Data Structures
          </span>.  
          With a deep understanding of both theory and practice, I bridge the 
          gap between **problem-solving and modern technology**.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-blue-600 px-8 py-3 rounded-lg shadow-xl hover:bg-blue-700 transition font-semibold"
        >
          Let’s Connect
        </motion.a>
      </motion.div>
    </div>
  );
}



// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useEffect, useState } from "react";

// // 3D Animated Sphere
// function FloatingSphere() {
//   return (
//     <mesh>
//       <sphereGeometry args={[1.5, 64, 64]} />
//       <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
//     </mesh>
//   );
// }

// export default function About() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // 🔹 Capture mouse movement for interactive particles
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-10 overflow-hidden">

//       {/* 🔹 Animated Glowing Background Orbs */}
//       <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-30 animate-ping"></div>

//       {/* 🔹 Floating Gradient Waves */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.15 }}
//         transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
//         className="absolute inset-0 bg-gradient-to-t from-purple-800 via-transparent to-blue-800 opacity-20"
//       ></motion.div>

//       {/* 🔹 Interactive Particle Stars */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         {[...Array(60)].map((_, i) => {
//           const speed = Math.random() * 6 + 4;
//           return (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full opacity-70"
//               initial={{
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight,
//                 opacity: 0,
//                 scale: 0,
//               }}
//               animate={{
//                 x: [
//                   Math.random() * window.innerWidth + mousePosition.x * 0.02,
//                   Math.random() * window.innerWidth - mousePosition.x * 0.02,
//                 ],
//                 y: [
//                   Math.random() * window.innerHeight + mousePosition.y * 0.02,
//                   -50,
//                 ],
//                 opacity: [0, 1, 0],
//                 scale: [0, 1, 0.5],
//               }}
//               transition={{
//                 duration: speed,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           );
//         })}
//       </div>

//       {/* LEFT: 3D Animation */}
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1.2 }}
//         className="flex-1 w-full h-[300px] lg:h-[500px] mb-10 lg:mb-0 z-10"
//       >
//         <Canvas>
//           <ambientLight intensity={0.6} />
//           <directionalLight position={[3, 3, 3]} intensity={1.2} />
//           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
//           <FloatingSphere />
//         </Canvas>
//       </motion.div>

//       {/* RIGHT: About Content */}
//       <motion.div
//         initial={{ opacity: 0, x: 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1.2 }}
//         className="flex-1 text-center lg:text-left max-w-2xl z-10"
//       >
//         <motion.h2
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl font-bold mb-6"
//         >
//           About <span className="text-blue-400">Me</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-gray-300 leading-relaxed text-lg mb-6"
//         >
//           I am <span className="font-semibold text-white">Manotosh Maity</span>, 
//           a passionate <span className="text-blue-400">Full Stack Developer</span> 
//           with expertise in{" "}
//           <span className="font-semibold">
//             C, Python, Java, PHP, MERN stack
//           </span>.  
//           I enjoy building scalable, user-friendly applications and creating 
//           innovative solutions that make a real impact.
//         </motion.p>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="text-gray-400 leading-relaxed mb-8"
//         >
//           My academic interests include{" "}
//           <span className="font-semibold">
//             Operating Systems, DBMS, Computer Networks, Compiler Design, and Data Structures
//           </span>.  
//           With a deep understanding of both theory and practice, I bridge the 
//           gap between <span className="text-blue-400">problem-solving</span> and modern technology.
//         </motion.p>

//         <motion.a
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           href="#contact"
//           className="bg-blue-600 px-8 py-3 rounded-lg shadow-xl hover:bg-blue-700 transition font-semibold"
//         >
//           Let’s Connect
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// }
