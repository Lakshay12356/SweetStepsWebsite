import { CarouselDemo } from "./Offerings";

const ChoosePackage = () => {

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