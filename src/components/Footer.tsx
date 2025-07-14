import { Facebook, Instagram, Linkedin, X as Twitter } from "lucide-react";
import Logo from "../assets/Icons/Logo.png";

const Footer = () => (
  <footer className="bg-black text-white py-10 px-4 rounded-t-3xl">
    <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Sweet Steps Logo" className="w-10 h-10 rounded-full" />
        <span className="text-xl font-semibold">Sweet Steps</span>
      </div>
      <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="#services" className="hover:text-white">Services</a></li>
        <li><a href="/aboutus" className="hover:text-white">About Us</a></li>
        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
      </ul>
      <div className="flex space-x-6 text-gray-300">
        <a href="https://www.facebook.com" className="hover:text-white"><Facebook size={20} /></a>
        <a href="https://x.com" className="hover:text-white"><Twitter size={20} /></a>
        <a href="https://instagram.com/sweet_.steps__" className="hover:text-white"><Instagram size={20} /></a>
        <a href="https://linkedin.com" className="hover:text-white"><Linkedin size={20} /></a>
      </div>
    </div>
    <div className="mt-10 text-center text-xs text-gray-500">
      © 2025 Sweet Steps — Crafted with love in every step.
    </div>
  </footer>
);

export default Footer;
