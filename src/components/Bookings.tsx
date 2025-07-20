import BookingCard from "./ui/bookingCard";
import easy from "../assets/Images/Easy.webp";
import hors from "../assets/Images/hors.webp";
const bookings = [
  { title: "Booking made easy", text: "Reserve your slot online or call", image: easy },
  { title: "At-home or studio", text: "Get impressions in comfort or at studio", image: hors }
];

const BookingOptions = () => (
  <section className="w-full px-4 py-8 mb-12 max-w-4xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {bookings.map((item, i) => (
        <div key={i} className="w-full">
          <BookingCard title={item.title} text={item.text} image={item.image} />
        </div>
      ))}
    </div>
  </section>
);

export default BookingOptions;