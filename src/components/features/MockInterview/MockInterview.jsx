import { motion } from "framer-motion";
import { FaRobot,  FaBrain, FaComments, FaMicrophoneAlt } from "react-icons/fa";

const MockInterview = () => {
   return (
    <section className="w-full bg-[#F8F3D9] py-24 px-6 text-[#504B38]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4"
        >
          🎤 Future of Prep: Mock Interviews with AI
        </motion.h2>
        <p className="text-lg text-[#6B6650] max-w-2xl mx-auto mb-12">
          Get ready for voice-to-voice AI interviews tailored to your role, experience, and difficulty level — plus get real-time feedback to improve.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl border border-[#E5DFB9] shadow-md"
          >
            <FaMicrophoneAlt className="text-3xl text-[#B9B28A] mb-4" />
            <h3 className="text-xl font-bold mb-2">Voice-Based Experience</h3>
            <p className="text-[#6B6650] text-sm">
              Talk to AI just like a real interviewer — no typing, no scripts.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl border border-[#E5DFB9] shadow-md"
          >
            <FaComments className="text-3xl text-[#B9B28A] mb-4" />
            <h3 className="text-xl font-bold mb-2">Role-Specific Interviews</h3>
            <p className="text-[#6B6650] text-sm">
              Choose a role like “Software Development” and we’ll tailor the questions based on your input.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl border border-[#E5DFB9] shadow-md"
          >
            <FaBrain className="text-3xl text-[#B9B28A] mb-4" />
            <h3 className="text-xl font-bold mb-2">Difficulty Personalization</h3>
            <p className="text-[#6B6650] text-sm">
              Set your experience level — beginner, intermediate, or advanced — and the AI adjusts accordingly.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl border border-[#E5DFB9] shadow-md"
          >
            <FaRobot className="text-3xl text-[#B9B28A] mb-4" />
            <h3 className="text-xl font-bold mb-2">Instant Feedback</h3>
            <p className="text-[#6B6650] text-sm">
              Receive real-time AI-powered evaluation of your answers with suggestions to improve.
            </p>
          </motion.div>
        </div>

        <p className="mt-12 text-[#B9B28A] text-sm uppercase font-semibold tracking-wider">
          🚀 Coming Soon to DevConnekt
        </p>
      </div>
    </section>
  );
}

export default MockInterview