// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/skills", label: "Skills" },
//     { path: "/project", label: "Projects" },
//     { path: "/work", label: "Work" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg flex justify-between items-center sticky top-0 z-50">
//       <Link to="/" className="text-2xl font-bold text-blue-400">
//         MyPortfolio
//       </Link>
//       <ul className="flex space-x-6">
//         {navLinks.map((link, i) => (
//           <li key={i}>
//             <NavLink
//               to={link.path}
//               className={({ isActive }) =>
//                 isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
//               }
//             >
//               {link.label}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }



import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/project", label: "Projects" },
    { path: "/work", label: "Work" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/logo.png"   // <-- put your logo in "public/logo.png"
          alt="Logo"
          className="h-8 w-8 object-contain rounded-full"
        />
        <span className="text-2xl font-bold text-blue-400">ManotoSH</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {navLinks.map((link, i) => (
          <li key={i}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-6 md:hidden shadow-lg">
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)} // close menu on click
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold block"
                    : "hover:text-blue-400 block"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
