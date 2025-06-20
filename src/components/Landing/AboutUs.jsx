import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaGlobe, FaUserFriends, FaRocket } from "react-icons/fa";

const AboutUs = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleGetStarted = () => {
    navigate(user ? "/feed" : "/login", { replace: false });
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#F8F3D9] px-6 py-20 sm:py-24 lg:py-32 transition-all text-[#504B38] flex items-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <p className="uppercase text-sm tracking-widest text-[#B9B28A] font-semibold mb-3">
            About DevConnekt
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            More than a platform —{" "}
            <span className="text-[#B9B28A]">a movement for developers</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6650] mb-6 leading-relaxed">
            DevConnekt unites ambitious individuals preparing for placements,
            internships, or simply improving their coding game. It's your space
            to learn, connect, and grow — with purpose-built tools and a
            like-minded community.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <FaRocket className="text-[#B9B28A] text-xl mt-1" />
              <p>
                <strong>Mission:</strong> Equip students with smart tools for
                structured placement preparation.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaGlobe className="text-[#B9B28A] text-xl mt-1" />
              <p>
                <strong>Vision:</strong> A global dev ecosystem built on
                collaboration, credibility, and community.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaUserFriends className="text-[#B9B28A] text-xl mt-1" />
              <p>
                <strong>Why Join:</strong> Be part of a focused network that
                supports you through every step of your tech journey.
              </p>
            </div>
          </div>

          <button
            onClick={handleGetStarted}
            className="mt-8 bg-[#504B38] text-white px-6 py-3 rounded-lg hover:bg-[#3e3a2a] transition shadow-md"
          >
            {user ? "Go to Feed →" : "Get Started →"}
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1733503711063-3427bff34612?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Developers at work"
            className="rounded-2xl shadow-lg w-full object-cover max-h-[500px] border border-[#E5DFB9]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
