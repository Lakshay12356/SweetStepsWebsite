import BookingCard from "./UIElements/bookingCard";

const bookings = [
  { title: "Booking made easy", text: "Reserve your slot online or call" },
  { title: "At-home or studio", text: "Get impressions in comfort or at studio" }
];

const BookingOptions = () => (
  <section className="w-full px-4 py-8 mb-12 max-w-4xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {bookings.map((item, i) => (
        <div key={i} className="w-full">
          <BookingCard title={item.title} text={item.text} />
        </div>
      ))}
    </div>
  </section>
);

export default BookingOptions;
