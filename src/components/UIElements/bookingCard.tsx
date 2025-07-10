const BookingCard = ({ title, text }: { title: string; text: string }) => (
  <div className="flex flex-col items-start text-left">
    <div className="w-100 h-100 rounded-3xl bg-gray-100 flex items-center justify-center">
      <div className="w-16 h-16 bg-white rounded-md"></div>
    </div>
    <h3 className="mt-6 text-lg font-bold text-black font-inter">{title}</h3>
    <p className="text-base text-gray-500 font-inter max-w-xs">{text}</p>
  </div>
);
export default BookingCard;