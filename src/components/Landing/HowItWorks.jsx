import { FaUserPlus, FaCompass, FaRobot, FaUsers } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus size={28} className="text-[#504B38]" />,
      title: "Sign Up & Set Your Goal",
      description:
        "Join DevConnekt by creating your profile and selecting your preparation path — internship, off-campus, or core.",
    },
    {
      icon: <FaCompass size={28} className="text-[#504B38]" />,
      title: "Navigate Curated Resources",
      description:
        "Explore our handpicked DSA sheets, CS fundamentals, blogs, and interview questions personalized for your journey.",
    },
    {
      icon: <FaRobot size={28} className="text-[#504B38]" />,
      title: "Leverage AI-Powered Practice",
      description:
        "Use our smart AI to generate quizzes and simulate interviews for personalized and efficient prep.",
    },
    {
      icon: <FaUsers size={28} className="text-[#504B38]" />,
      title: "Connect & Grow Together",
      description:
        "Find your tech circle, chat with peers, share experiences, and build your community on DevConnekt.",
    },
  ];

  return (
    <section className="bg-[#EBE5C2] py-24 px-6 sm:px-10" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#504B38] mb-6">
          🧭 How DevConnekt Works
        </h2>
        <p className="text-center text-[#6B6650] max-w-2xl mx-auto mb-16 text-lg">
          Whether you're preparing for internships, core jobs, or off-campus placements — DevConnekt simplifies your path with focused tools and community support.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#F8F3D9] border border-[#E5DFB9] rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#B9B28A] text-white font-bold text-lg flex items-center justify-center shadow">
                {index + 1}
              </div>

              <div className="ml-2 mt-6 flex items-center gap-3">
                {step.icon}
                <h3 className="text-xl font-bold text-[#504B38]">{step.title}</h3>
              </div>
              <p className="mt-3 text-[#6B6650]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
