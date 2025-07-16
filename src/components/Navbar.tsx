import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu, CalendarHeart } from "lucide-react";
import Logo from "../assets/Icons/Logo.png";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [mobileMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[80%] bg-[#414652]/80 backdrop-blur-sm rounded-full shadow-md m-[2%] z-50 ">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 overflow-hidden rounded-full cursor-pointer">
              <img
                src={Logo}
                alt="Sweet Steps Logo"
                width="40"
                height="40"
                className="w-10 h-10 rounded-full"
              />

              <span
                className={`text-2xl font-bold text-white select-none transition-opacity duration-300 ${mobileMenuOpen
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
                  }`}
              >
                <Link to="/">SweetSteps</Link>
              </span>
            </div>

            <div className="items-center hidden space-x-8 md:flex">
              <Link
                to="/"
                className="font-medium text-white hover:text-purple-200"
              >
                Home
              </Link>
              <a
                href="#services"
                className="font-medium text-white hover:text-purple-200"
              >
                Services
              </a>
              <Link
                to="/aboutus"
                className="font-medium text-white hover:text-purple-200"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="font-medium text-white hover:text-purple-200"
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:flex">
              <Link to="/booking" className="py-2">
                <button className="flex items-center gap-2 px-5 py-2 text-white bg-gradient-to-r from-[#7808D0] to-purple-500 rounded-full shadow-md shadow-purple-500/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-medium">
                  <CalendarHeart size={18} />
                  Book an Appointment
                </button>
              </Link>
            </div>

            <div className="flex items-center h-full md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center h-full text-white"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>


          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="absolute mt-12 top-0 left-0 w-[80%] bg-[#414652]/80 backdrop-blur-sm rounded-2xl shadow-md border-t border-[#5a5f70] px-6 py-5 z-40 transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-5 text-white text-base font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-300">
              Home
            </Link>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-300">
              Services
            </a>
            <Link to="/aboutus" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-300">
              About Us
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-300">
              Contact
            </Link>
            <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-2 text-white bg-gradient-to-r from-[#7808D0] to-purple-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-medium">
                <CalendarHeart size={18} />
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
