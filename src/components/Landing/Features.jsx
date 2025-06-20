import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaUsers,
  FaProjectDiagram,
  FaBriefcase,
  FaLightbulb,
  FaShieldAlt,
  FaRocket,
  FaBlog,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Feature List
const features = [
  {
    title: "DSA Sheet",
    description: "Solve structured DSA problems curated for placement.",
    icon: FaRocket,
    path: "/dsa-sheet",
    isProtected: false,
  },
  {
    title: "Coding Quiz",
    description: "Sharpen your skills with our AI-generated coding quizzes.",
    icon: FaLightbulb,
    path: "/quiz",
    isProtected: false,
  },
  {
    title: "Blog Platform",
    description: "Read and share technical blogs with the community.",
    icon: FaBlog,
    path: "/blogs",
    isProtected: false,
  },
  {
    title: "Connections & Chat",
    description: "Build your network and engage via real-time chat.",
    icon: FaUsers,
    path: "/connections",
    isProtected: true,
  },
  {
    title: "Personal Feed",
    description: "Share updates and collaborate with your peers.",
    icon: FaShieldAlt,
    path: "/feed",
    isProtected: true,
  },
  {
    title: "Cover Letter Guide",
    description: "Craft personalized cover letters for internships and jobs.",
    icon: FaProjectDiagram,
    path: "/resources/cover-letter",
    isProtected: false,
  },
  {
    title: "Mock Interviews",
    description: "Practice interviews with AI and get instant feedback.",
    icon: FaBriefcase,
    path: "/mock-interviews",
    isProtected: true,
  },
  {
    title: "Resource Hub",
    description: "Explore a curated library of CS and placement resources.",
    icon: FaProjectDiagram,
    path: "/resources",
    isProtected: false,
  },
];

const Features = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleCardClick = (feature) => {
    if (feature.isProtected && !user) {
      navigate(`/locked?redirect=${feature.path}`);
    } else {
      navigate(feature.path);
    }
  };

  return (
    <section id="features" className="py-20 bg-[#F8F3D9] text-center w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#504B38]"
      >
        Explore Our Features
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 text-lg text-[#6B6650] max-w-2xl mx-auto"
      >
        Everything a developer needs to level up — all in one place.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
  <motion.div
    key={index}
    onClick={() => handleCardClick(feature)}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut",
    }}
    whileHover={{ scale: 1.05 }}
    className={`relative p-6 rounded-3xl border transition-all duration-300 shadow-[0_12px_40px_rgba(80,75,56,0.2)] group overflow-hidden ${
      feature.isProtected && !user
        ? "bg-[#f3d9b780] backdrop-blur-sm border-gray-300 opacity-60 grayscale-[40%] cursor-not-allowed"
        : "bg-[#ffffffc0] backdrop-blur-md border-[#E5DFB9] cursor-pointer"
    }`}
  >
    {/* Icon with glowing ring */}
    <div className="flex justify-center mb-5">
      <div className="p-3 rounded-full bg-[#B9B28A]/20 group-hover:bg-[#B9B28A]/30 transition">
        <feature.icon className="text-3xl text-[#B9B28A]" />
      </div>
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold text-[#504B38] mb-2">
      {feature.title}
    </h3>

    {/* Description */}
    <p className="text-[#6B6650] text-sm leading-relaxed min-h-[50px]">
      {feature.description}
    </p>

    {/* Lock Badge */}
    {feature.isProtected && !user && (
      <div className="absolute top-3 right-3 text-xs bg-[#504B38] text-white px-2 py-1 rounded-full shadow">
        🔒 Login Required
      </div>
    )}

    {/* Hover glow for public */}
    {!feature.isProtected && (
      <div className="absolute inset-0 bg-[#f8f3d9] opacity-0 group-hover:opacity-10 rounded-3xl transition" />
    )}
  </motion.div>
))}

      </div>
    </section>
  );
};

export default Features;
