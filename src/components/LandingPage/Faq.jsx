
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
    const faqs = [
      {
        question: "What is DevConnekt?",
        answer:
          "DevConnekt is a platform designed for developers to connect, collaborate, and grow. It offers networking features, blog sharing, real-time chat, and a premium membership for exclusive features.",
      },
      {
        question: "How do I get premium membership?",
        answer:
          "You can subscribe to our premium membership through the 'Upgrade' section in your account. Once the payment is successful, premium features will be activated instantly.",
      },
      {
        question: "Can I customize my profile?",
        answer:
          "Yes! You can customize your profile by adding your skills, projects, social links, and more under the 'Edit Profile' section.",
      },
      {
        question: "How do I write and publish blogs?",
        answer:
          "Navigate to the 'Blogs' section and click on 'Write a Blog.' You can share coding tips, experiences, or tech insights with the DevConnekt community.",
      },
      {
        question: "What if I face issues with my account?",
        answer:
          "If you encounter any issues, feel free to contact our support team at frazahmadhaidry@gmail.com. We’re happy to assist you!",
      },
    ];
  
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="container mx-auto max-w-3xl p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Frequently Asked Questions
        </h2>
  
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-lg font-medium text-gray-800"
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
  
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Faq