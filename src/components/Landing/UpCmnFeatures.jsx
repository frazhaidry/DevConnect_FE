import { FaLock } from "react-icons/fa";

const UpCmnFeatures = () => {
  const features = [
    {
      title: "🎤 Mock Interview with AI",
      description:
        "Practice real-world interview questions with an AI-powered mock interviewer that provides instant feedback and confidence scoring.",
    },
    {
      title: "🤖 AI-Powered Quiz",
      description:
        "Generate personalized quizzes tailored to your learning needs with the power of AI.",
    },
    {
      title: "🎤 Interview Experience by Seniors",
      description:
        "Access real interview stories and tips shared by seniors to boost your preparation.",
    },
    {
      title: "📄 ATS-Friendly Resume Templates",
      description:
        "Get professional resume templates optimized for Applicant Tracking Systems.",
    },
  ];

  return (
    <section className="w-full bg-[#F8F3D9] py-16 px-6 relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-[#504B38] mb-12">
        🚀 Upcoming Features
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Cards container */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center z-10 relative">
          {features.map(({ title, description }, idx) => (
            <div
              key={idx}
              className="w-full max-w-xs rounded-3xl bg-[#EBE5C2]/80 border-2 border-[#E5DFB9] backdrop-blur-md shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform cursor-not-allowed"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#504B38] mb-4">
                {title}
              </h3>
              <p className="text-[#504B38]/90 text-sm sm:text-base">
                {description}
              </p>
              <span className="mt-6 inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[#B9B28A] text-white w-max select-none">
                Coming Soon
              </span>
            </div>
          ))}
        </div>

        {/* Lock icon overlay */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <FaLock
            size={100}
            className="text-[#B9B28A]/40 animate-pulse drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default UpCmnFeatures;
