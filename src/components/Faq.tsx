import { useState } from "react";

const faqData = [
  {
    question: "What are 3D hand and feet impressions?",
    answer:
      "They are lifelike castings of your loved one's hands or feet, captured in stunning detail using skin-safe materials. Perfect for preserving memories forever.",
  },
  {
    question: "Is it safe for babies and elderly?",
    answer:
      "Yes! We use hypoallergenic, non-toxic, and baby-safe materials that are gentle on all skin types, including newborns and seniors.",
  },
  {
    question: "How long does the process take?",
    answer:
      "The casting process takes just a few minutes. The final framed impression is usually ready for pickup or delivery within 7–10 business days.",
  },
  {
    question: "Do you offer at-home service?",
    answer:
      "Absolutely! We provide doorstep service across select locations. Our team brings everything needed to capture the perfect impression in your comfort zone.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="px-6 py-16 max-w-4xl mx-auto flex flex-col items-center font-[Inter]"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="w-full space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition flex justify-between items-center"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-purple-600">
                {openIndex === index ? (
                  "−"
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>

            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 text-gray-600 ${openIndex === index ? "max-h-40 opacity-100 translate-y-0 pt-2 pb-4" : "max-h-0 opacity-0 -translate-y-2"
                } transform`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
