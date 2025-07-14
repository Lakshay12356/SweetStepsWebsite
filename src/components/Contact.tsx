import { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const contactDetails = [
  {
    title: "Email Us",
    value: "sweetsteps05@gmail.com",
    icon: Mail,
    color: "from-blue-500 to-cyan-500",
    action: "mailto:sweetsteps05@gmail.com",
  },
  {
    title: "Call Us",
    value: "+91-8302419714",
    icon: Phone,
    color: "from-green-500 to-emerald-500",
    action: "tel:+918302419714",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showMap, setShowMap] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

          {/* Email & Phone Cards */}
          {contactDetails.map((info, i) => (
            <a
              key={i}
              href={info.action}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all border border-white/80 hover:scale-[1.02]"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${info.color}`}
              >
                <info.icon className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-md font-semibold text-gray-800">{info.title}</h4>
                <p className="text-gray-600 text-sm">{info.value}</p>
              </div>
            </a>
          ))}

          {/* Visit Us with Expandable Map */}
          <div className="rounded-2xl bg-white shadow-md border border-white/80">
            <button
              onClick={() => setShowMap(!showMap)}
              className="w-full flex items-center justify-between gap-4 p-6 hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-md font-semibold text-gray-800">Visit Us</h4>
                  <p className="text-gray-600 text-sm">
                    73/47 Paramhans Marg, Mansarovar, Jaipur
                  </p>
                </div>
              </div>
              {showMap ? (
                <ChevronUp className="text-gray-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>

            {/* Toggleable Google Map */}
            <div
              className={`transition-[max-height] duration-500 overflow-hidden ${
                showMap ? "max-h-[300px] mt-2" : "max-h-0"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.899827036558!2d75.7671207!3d26.8571403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53962efcb8f%3A0xae986bdc5dc8e3ad!2sSweet%20Steps%20Impressions!5e0!3m2!1sen!2sin!4v1720964129577!5m2!1sen!2sin"
                className="w-full h-[250px] border-t rounded-b-2xl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">Send a Message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;