import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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
  {
    title: "Visit Us",
    value: "73/47 Paramhans Marg, Mansarovar, Jaipur",
    icon: MapPin,
    color: "from-pink-500 to-purple-500",
    action: "#",
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
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
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
        </div>
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
