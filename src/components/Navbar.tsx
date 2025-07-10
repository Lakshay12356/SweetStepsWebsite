import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu, CalendarHeart } from "lucide-react";

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
            {/* Logo */}
            <div className="flex items-center space-x-3 overflow-hidden rounded-full cursor-pointer">
              <img
                src="/src/assets/Icons/Logo.png"
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

            {/* Desktop Links */}
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

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Link to="/booking" className="py-2">
                <button className="flex items-center gap-2 px-5 py-2 text-white border border-[#7808D0] bg-[#7808D0] rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-medium">
                  <CalendarHeart size={18} />
                  Book an Appointment
                </button>
              </Link>
            </div>

            {/* Hamburger Menu - Mobile */}
            <div className="flex items-center h-full md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center justify-center h-full text-white"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-2 right-2 z-50 w-[85%] max-w-sm h-[96%] bg-white rounded-2xl shadow-2xl p-5 flex flex-col gap-6 overflow-y-auto transition-all duration-300 ease-in-out">
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-[#333]">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4 text-[16px] font-medium text-gray-700">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#7808D0]"
              >
                Home
              </Link>
              {/* Services Dropdown */}
              <Link
                to="/services"
                className="font-medium text-white hover:text-purple-200"
              >
                Services
              </Link>
              <Link
                to="/aboutus"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#7808D0]"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#7808D0]"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 text-white border border-[#7808D0] bg-[#7808D0] rounded-full hover:bg-black hover:border-black transition-all duration-300 font-semibold">
                <CalendarHeart size={18} />
                Book Appointment
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
