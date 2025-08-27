import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="flex justify-center space-x-6 mb-3">
        <a href="https://www.facebook.com/share/1744CHjkuw/" target="_blank" rel="noreferrer"><FaFacebook size={24} /></a>
        <a href="https://www.instagram.com/manotosh293?igsh=d2YyenRpZ2FqbG40" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
        <a href="https://x.com/manotoshmaity7?t=PGnCsOWqXOijAhshCErQ7w&s=09" target="_blank" rel="noreferrer"><FaTwitter size={24} /></a>
        <a href="https://github.com/manotoshmaity" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/manotosh-maity-27a595287?trk=contact-info" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
      </div>
      <p className="text-gray-400">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
}
