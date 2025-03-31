import React, { useState } from "react";

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a variety of courses including JEE, NEET, UPSC, GATE, and many more competitive exam preparations.",
  },
  {
    question: "Are the courses available online?",
    answer:
      "Yes! All our courses are 100% online and accessible from anywhere.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes, we provide high-quality PDFs, video lectures, and practice tests for each course.",
  },
  {
    question: "Can I access the courses on mobile?",
    answer:
      "Absolutely! Our platform is mobile-friendly and works on all devices.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer a 7-day refund policy if you're not satisfied with the course.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-2 cursor-pointer"
          >
            <div
              className="flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 p-3 text-gray-700 bg-gray-50 rounded-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
