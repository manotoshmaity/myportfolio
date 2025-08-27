
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 🔹 Capture mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">

      {/* 🔹 Animated Glowing Background Orbs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-30 animate-ping"></div>

      {/* 🔹 Floating Gradient Waves */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-t from-purple-800 via-transparent to-blue-800 opacity-20"
      ></motion.div>

      {/* 🔹 Interactive Particle Stars */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(60)].map((_, i) => {
          const speed = Math.random() * 6 + 4;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth + mousePosition.x * 0.02,
                  Math.random() * window.innerWidth - mousePosition.x * 0.02,
                ],
                y: [
                  Math.random() * window.innerHeight + mousePosition.y * 0.02,
                  -50,
                ],
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-40 h-40 mb-6"
        >
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping"></div>
          <img
            src="/profile.jpg"   // 🔹 replace with your image path
            alt="Portfolio Owner"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </motion.div>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-blue-400">Manotosh Maity</span>
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl lg:text-3xl font-semibold mb-6"
        >
          <Typewriter
            words={[
              "Full Stack Developer",
              "Problem Solver",
              "Tech Enthusiast",
              "UX/UI Designer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 max-w-xl mb-8"
        >
          I design and develop modern, scalable web applications with MERN stack, 
          blending creativity with technical expertise to deliver seamless user experiences.
        </motion.p>

        <motion.a
          href="/mycv.pdf"
          download
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #3b82f6" }}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all"
        >
          🚀 Download CV
        </motion.a>
      </motion.div>

      {/* RIGHT CONTENT - 3D ANIMATION */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex-1 w-full h-[400px] lg:h-[500px] z-10"
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 1]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#3b82f6"
                distort={0.4}
                speed={2}
                roughness={0.1}
              />
            </Sphere>
          </Float>
        </Canvas>
      </motion.div>
    </div>
  );
}
