import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I provide full-stack web development, including custom websites, e-commerce platforms, portfolio sites, and web applications. I also offer services in video editing, SEO, digital marketing, and meta ads management.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Project timelines vary depending on complexity. A basic website typically takes 1–2 weeks, while advanced platforms or e-commerce websites may take 3–6 weeks.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing depends on the scope, features, and design complexity. I offer custom quotes for each project after understanding your requirements.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes! I offer ongoing maintenance, updates, and technical support to ensure your website runs smoothly even after launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. I can redesign and modernize existing websites to improve user experience, performance, and visual appeal.",
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Yes. All websites I create are responsive, mobile-friendly, and optimized for search engines to maximize visibility and performance.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I ensure clear, regular updates via email, WhatsApp, or Zoom, depending on your preference. You’ll always know the project’s progress.",
  },
  {
    question: "What if I’m not satisfied with the final website?",
    answer:
      "Client satisfaction is my priority. I offer revision rounds to refine the website until it meets your expectations before final delivery.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto py-10 sm:py-12 px-4 flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-7xl text-orange-500 font-bold text-center mb-8">
        Need Clarity? Check This Out
      </h2>

      {/* FAQ Container */}
      <div className="w-full sm:w-5/6 lg:w-3/6 space-y-4">

        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">

            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 sm:px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            >
              <span className="font-medium text-sm sm:text-base lg:text-lg">
                {faq.question}
              </span>

              <span className="text-lg">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-4 sm:px-6 py-4 bg-white text-gray-700 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}
