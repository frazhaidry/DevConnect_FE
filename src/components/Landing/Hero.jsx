import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleGetStarted = () => {
    if (user) {
      navigate("/feed", { replace: false });
    } else {
      navigate("/login", { replace: false });
    }
  };

  const scrollToFeatures = () => {
    const featureSection = document.getElementById("features");
    if (featureSection) {
      featureSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-light-background dark:bg-dark-background text-center px-6 transition-colors duration-300">
      {/* Animated Heading */}
   <motion.h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mt-6 leading-tight text-[#504B38]">
  DevConnekt — Built by Students. Powered by AI. Backed by Peers 🚀
</motion.h1>

<motion.p className="text-[#6B6650] mt-6 max-w-2xl text-lg">
  DevConnekt brings you <strong>AI-powered quizzes</strong>, <strong>mock interviews</strong>, <strong>placement-focused DSA sheets</strong>, and a <strong>supportive tech network</strong> — everything you need in one place.
</motion.p>


      {/* Impact Stats */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-10 text-[#504B38]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold">100+</span>
          <span className="text-lg font-medium">Registered Users</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold">150+</span>
          <span className="text-lg font-medium">DSA Questions</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold">50+</span>
          <span className="text-lg font-medium">Interviews Questions</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold">20+</span>
          <span className="text-lg font-medium">Blog Posts</span>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      >
        <motion.button
          onClick={handleGetStarted}
          className="bg-[#504B38] text-white px-6 py-3 rounded-lg font-medium text-lg shadow-md transition-all duration-300 hover:bg-[#3e3a2a]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up Here →
        </motion.button>
      </motion.div>

      {/* Scroll to Features Hook */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <button
          onClick={scrollToFeatures}
          className="text-light-accent dark:text-dark-accent font-medium text-base flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all"
        >
          Explore Features
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
      </motion.div>
       <div className="w-full border-t-4 border-[#E5DFB9] mt-20" />

       
    </section>
  );
};

export default Hero;
