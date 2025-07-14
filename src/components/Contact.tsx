import React, { useState } from "react";

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
    // submit logic
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you! Let’s discuss how we can help bring your idea to life.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Email Us</h4>
              <p className="text-gray-600">admin@craftique.me</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
              <p className="text-gray-600">+91-6378146202</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Visit Us</h4>
              <p className="text-gray-600">73/47 Paramhans Marg, Mansarovar, Jaipur</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
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
            className="w-full rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
