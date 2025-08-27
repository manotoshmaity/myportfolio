// import React from "react";
// import Home from "./Home";
// import About from "./About";
// import Skills from "./Skills";
// import Project from "./Project";
// import Work from "./Work";
// import Contact from "./Contact";

// export default function AllInOne() {
//   return (
//     <>
//       <Home />
//       <About />
//       <Skills />
//       <Project />
//       <Work />
//       <Contact />
//     </>
//   );
// }



import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Work from "./Work";
import Contact from "./Contact";

export default function AllInOne() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* Content on top of background */}
      <div className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Project />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
