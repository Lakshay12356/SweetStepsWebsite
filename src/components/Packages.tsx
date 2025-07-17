// import React, { useState } from "react";
// import Baby from "../assets/Images/Baby.webp";
// import Elder from "../assets/Images/Elder.webp";
// import Family from "../assets/Images/Family.webp";
// import { FaBaby, FaUsers, FaHeart, FaBlind } from "react-icons/fa";
import { CarouselDemo } from "./Offerings";

// type PackageItem = {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   background: string;
// };

// const packages: PackageItem[] = [
//   {
//     icon: <FaBaby className="text-white text-4xl" />,
//     title: "First Touch",
//     description: "Cherish tiny hands and feet forever",
//     background: Baby,
//   },
//   {
//     icon: <FaUsers className="text-white text-4xl" />,
//     title: "Rooted Together",
//     description: "Celebrate special bonds and milestones",
//     background: Family,
//   },
//   {
//     icon: <FaBlind className="text-white text-4xl" />,
//     title: "Legacy Prints",
//     description: "Honor wisdom and love through time",
//     background: Elder,
//   },
//   {
//     icon: <FaHeart className="text-white text-4xl" />,
//     title: "Together Forever",
//     description: "Celebrate love, together and timeless",
//     background: "https://picsum.photos/300/300?random=4",
//   },
// ];

const ChoosePackage = () => {
  // const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div id="services" className="px-6 py-12 font-[Inter] text-gray-800">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">
        Explore Our Offerings
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <CarouselDemo />
      </div>
    </div>
  );
};

export default ChoosePackage;