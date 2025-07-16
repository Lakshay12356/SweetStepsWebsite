import React, { useState } from "react";
import Baby from "../assets/Images/Baby.webp";
import Elder from "../assets/Images/Elder.webp";
import Family from "../assets/Images/Family.webp";
import { FaBaby, FaUsers, FaHeart, FaBlind } from "react-icons/fa";

type PackageItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  background: string;
};

const packages: PackageItem[] = [
  {
    icon: <FaBaby className="text-white text-4xl" />,
    title: "First Touch",
    description: "Cherish tiny hands and feet forever",
    background: Baby,
  },
  {
    icon: <FaUsers className="text-white text-4xl" />,
    title: "Rooted Together",
    description: "Celebrate special bonds and milestones",
    background: Family,
  },
  {
    icon: <FaBlind className="text-white text-4xl" />,
    title: "Legacy Prints",
    description: "Honor wisdom and love through time",
    background: Elder,
  },
  {
    icon: <FaHeart className="text-white text-4xl" />,
    title: "Together Forever",
    description: "Celebrate love, together and timeless",
    background: "https://picsum.photos/300/300?random=4",
  },
];

const ChoosePackage = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div id="services" className="px-6 py-12 font-[Inter] text-gray-800">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">
        Explore Our Offerings
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {packages.map((pkg, idx) => {
          const isActive = activeIdx === idx;

          return (
            <div
              key={idx}
              className={`relative w-80 h-80 rounded-3xl overflow-hidden bg-cover bg-center shadow-lg group transition-transform duration-300
                ${isActive ? "scale-105" : ""}
                lg:hover:scale-105
              `}
              style={{ backgroundImage: `url(${pkg.background})` }}
              onClick={() => setActiveIdx(isActive ? null : idx)}
            >
              <div
                className={`absolute inset-0 z-10 transition-all duration-300
                  bg-black/20 lg:group-hover:bg-black/70
                  ${isActive ? "bg-black/70" : ""}
                `}
              />
              <div
                className={`relative z-20 flex flex-col items-center justify-center h-full text-center px-4
                  transition-all duration-500 ease-in-out
                  opacity-0 translate-y-6
                  lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                  ${isActive ? "opacity-100 translate-y-0" : ""}
                `}
              >
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full shadow-lg mb-4">
                  {pkg.icon}
                </div>
                <h3 className="text-xl text-white font-semibold mb-1">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-200 max-w-[200px] opacity-90">
                  {pkg.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChoosePackage;