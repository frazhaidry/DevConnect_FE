import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate(); 
    const user = useSelector((store) => store.user);


    const handleGetStarted = () => {
        if (user) {
          navigate("/feed", { replace: false });  // Redirect to feed if already logged in
        } else {
          navigate("/login",  { replace: false }); // Redirect to login if not logged in
        }
      };
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        The <span className="text-blue-600">Ultimate</span> Platform for  
        <br /> Developers to <span className="text-black">Connect & Grow</span>
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        className="text-gray-600 mt-4 max-w-2xl text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-blue-600 font-semibold">DevConnekt</span> is a platform designed for  
        <span className="text-blue-600 font-bold"> developers to connect, collaborate, and grow.</span>  
        Showcase your skills, network with <span className="text-blue-600 font-bold">like-minded professionals</span>,  
        and unlock <span className="text-blue-600 font-bold">new career opportunities</span>.  
        With <span className="text-blue-600 font-bold">real-time chat</span>,  
        <span className="text-blue-600 font-bold"> profile customization</span>, and  
        <span className="text-blue-600 font-bold"> blog sharing</span>, we empower developers  
        to build meaningful connections and advance their careers.
      </motion.p>

      {/* Animated CTA Buttons */}
      <motion.div
        className="mt-6 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => handleGetStarted()}
          className="bg-black text-white px-6 py-3 rounded-md font-medium text-lg transition-all duration-300 hover:bg-gray-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up Here →
        </motion.button>
      </motion.div>
    </section>
    </>
  )
}

export default Hero