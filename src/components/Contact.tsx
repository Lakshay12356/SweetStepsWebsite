import { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

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

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const [showMap, setShowMap] = useState(false);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Get in Touch
          </h2>

          {contactDetails.map((info, i) => (
            <a
              key={i}
              href={info.action}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all border border-white/80 hover:scale-[1.02]"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${info.color}`}
              >
                <info.icon className="text-white w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{info.title}</h4>
                <p className="text-gray-600 text-sm">{info.value}</p>
              </div>
            </a>
          ))}

          {/* MAP */}
          <div className="rounded-2xl bg-white shadow-sm border border-white/80">
            <button
              onClick={() => setShowMap(!showMap)}
              className="w-full flex items-center justify-between gap-4 p-5 hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
                  <MapPin className="text-white w-7 h-7" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800">Visit Us</h4>
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

        {/* RIGHT: Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 p-8 rounded-xl shadow-sm space-y-6"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            Book a Call
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <Input
                {...register("firstName", {
                  required: "First Name is required",
                })}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <Input {...register("lastName")} placeholder="Last Name" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <Input
              type="tel"
              placeholder="Phone"
              {...register("phone", {
                pattern: {
                  value: /^[0-9+\-()\s]*$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;