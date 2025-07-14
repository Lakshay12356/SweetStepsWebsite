const BookingCard = ({ title, text }: { title: string; text: string }) => (
  <div className="flex flex-col items-start text-left space-y-4">
    <div className="w-full aspect-square rounded-3xl bg-gray-100 flex items-center justify-center">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-md"></div>
    </div>
    <h3 className="text-base sm:text-lg font-bold text-black font-inter">{title}</h3>
    <p className="text-sm sm:text-base text-gray-500 font-inter max-w-xs">{text}</p>
  </div>
);

export default BookingCard;