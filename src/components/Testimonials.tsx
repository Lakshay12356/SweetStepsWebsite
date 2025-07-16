import { testimonials } from "./testimonialsData";

const Star = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className="w-4 h-4"
    fill={filled ? "#facc15" : "none"}
    stroke="#facc15"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.165 6.636h6.969c.969 0 1.371 1.24.588 1.81l-5.634 4.09 2.165 6.637c.3.921-.755 1.688-1.54 1.118l-5.635-4.09-5.635 4.09c-.784.57-1.838-.197-1.539-1.118l2.165-6.637-5.635-4.09c-.783-.57-.38-1.81.588-1.81h6.969l2.165-6.636z"
    />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="bg-white text-black py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column (Text) */}
        <div className="flex flex-col justify-center items-start">
          <p className="text-lg font-medium text-purple-500">Stories That Stay With You</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Loved by Families,<br />
            Treasured for Generations
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">
            Every impression captures a precious chapter: a baby's first touch, a parent's loving embrace.
            These aren’t just memories, they’re moments, captured forever in the hands of the ones you love.
          </p>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative overflow-hidden">
          {/* Top Gradient */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/90 to-white/0 pointer-events-none z-20" />

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/90 to-white/0 pointer-events-none z-20" />

          {/* Left Column: Scrolling up (always visible) */}
          <div className="flex flex-col gap-6 overflow-hidden h-[80vh] px-2 sm:px-3">
            <div className="marquee-up flex flex-col gap-6">
              {[...testimonials.filter((_, i) => i % 2 === 0), ...testimonials.filter((_, i) => i % 2 === 0)].map((t, idx) => (
                <div
                  key={`left-${idx}`}
                  className="bg-white w-full rounded-xl p-5 shadow-lg flex flex-col gap-4 transition-transform hover:scale-[1.01] hover:shadow-xl duration-300 ease-in-out"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} filled={i < (t.rating || 0)} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm text-justify">“{t.feedback}”</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Scrolling down (hidden on mobile) */}
          <div className="hidden sm:flex flex-col gap-6 overflow-hidden h-[80vh] px-2 sm:px-3">
            <div className="marquee-down flex flex-col gap-6">
              {[...testimonials.filter((_, i) => i % 2 !== 0), ...testimonials.filter((_, i) => i % 2 !== 0)].map((t, idx) => (
                <div
                  key={`right-${idx}`}
                  className="bg-white w-full rounded-xl p-5 shadow-lg flex flex-col gap-4 transition-transform hover:scale-[1.01] hover:shadow-xl duration-300 ease-in-out"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} filled={i < (t.rating || 0)} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm text-justify">“{t.feedback}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
