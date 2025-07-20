const BookingCard = ({ title, text, image }: { title: string; text: string; image: string }) => (
  <div className="flex flex-col items-start text-left space-y-4">
    <div className="w-full aspect-square rounded-3xl bg-gray-100 flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
    <h3 className="text-base sm:text-lg font-bold text-black font-inter">{title}</h3>
    <p className="text-sm sm:text-base text-gray-500 font-inter max-w-xs">{text}</p>
  </div>
);

export default BookingCard;