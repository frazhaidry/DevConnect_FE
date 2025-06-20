import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
const faqs = [
  {
    question: "Who is DevConnekt for?",
    answer:
      "DevConnekt is built for students, freshers, and early-career developers looking to prepare for placements, internships, and technical interviews through a community-driven approach.",
  },
  {
    question: "Is DevConnekt free to use?",
    answer:
      "Yes! Most features like blogs, quizzes, resources, and the DSA sheet are completely free. Some advanced tools like mock interviews or real-time networking may require login.",
  },
  {
    question: "How do I start preparing for placements on DevConnekt?",
    answer:
      "Begin by exploring our DSA Sheet, take coding quizzes, and read blogs shared by peers. You can also try mock interviews to get real-time feedback on your preparation.",
  },
  {
    question: "What makes DevConnekt different from other platforms?",
    answer:
      "DevConnekt combines technical resources with real-time networking, chat features, and peer-to-peer engagement, so you not only practice — you connect and grow with others.",
  },
  {
    question: "How does the mock interview feature work?",
    answer:
      "Mock Interviews simulate real coding interviews using AI. You'll be given questions, time limits, and instant feedback — helping you practice under pressure.",
  },
  {
    question: "Can I share my placement journey or technical blog?",
    answer:
      "Absolutely! Go to the Blogs section, click on 'Write a Blog', and start sharing your knowledge or experiences with the DevConnekt community.",
  },
  {
    question: "Do I need an account to use DevConnekt?",
    answer:
      "You can browse blogs, quizzes, and DSA sheets without an account. However, features like chat, feed, profile customization, and mock interviews require login.",
  },
  {
    question: "Is my data safe on DevConnekt?",
    answer:
      "Yes. We use modern authentication and follow best practices to protect your data. You control your profile visibility and connections.",
  }
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f0eac8] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#504B38] mb-10">
          🙋 Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5DFB9] rounded-xl shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-[#504B38] font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-[#B9B28A]" />
                ) : (
                  <FaChevronDown className="text-[#B9B28A]" />
                )}
              </button>

              <div
                id={`faq-${index}`}
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[300px] py-2" : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-[#6B6650] text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
