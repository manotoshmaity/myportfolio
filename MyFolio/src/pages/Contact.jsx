
"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

// 3D Globe Model
function Globe() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color="#4facfe" wireframe />
      </mesh>
    </Float>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/contact", formData); // ✅ keep localhost for testing
      console.log("Success:", res.data);
      alert("Message sent ✅");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      alert("Failed to send ❌");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-black text-white px-10 py-16">
      {/* Left side: 3D Globe */}
      <div className="w-full lg:w-1/2 h-[400px] flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 3, 5]} intensity={1.2} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
          <Globe />
        </Canvas>
      </div>

      {/* Right side: Contact Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 mt-10 lg:mt-0"
      >
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/20"
          >
            <FaPhone className="text-green-400 text-2xl" />
            <p className="text-lg">+91 99073 00447</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/20"
          >
            <FaEnvelope className="text-red-400 text-2xl" />
            <p className="text-lg">manotoshmaity7@email.com</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/20 md:col-span-2"
          >
            <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
            <p className="text-lg">Kolkata, India</p>
          </motion.div>
        </div>

        {/* ✅ Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 text-white font-semibold py-3 rounded-lg shadow-xl"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
