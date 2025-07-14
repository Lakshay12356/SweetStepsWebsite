const BookingCard = ({ title, text }: { title: string; text: string }) => (
  <div className="flex flex-col items-start text-left space-y-4 p-4 rounded-2xl bg-white shadow-md h-full">
    {/* Icon container */}
    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="w-8 h-8 bg-white rounded-md"></div>
    </div>
    {/* Title */}
    <h3 className="text-base sm:text-lg font-bold text-black font-inter">
      {title}
    </h3>
    {/* Description */}
    <p className="text-sm sm:text-base text-gray-500 font-inter leading-snug">
      {text}
    </p>
  </div>
);

export default BookingCard;