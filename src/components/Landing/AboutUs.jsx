import { motion } from "framer-motion"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    const user = useSelector((store)=> store.user)

    const handleGetStarted = () => {
        if (user) {
          navigate("/feed", { replace: false });  // Redirect to feed if already logged in
        } else {
          navigate("/login",  { replace: false }); // Redirect to login if not logged in
        }
      };
  return (
   <>
    {/* About Us Section */}
    <section id="about" className="py-20 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-900">What is <span className="text-blue-600">DevConnekt?</span></h2>
          <p className="mt-4 text-lg text-gray-700">
  DevConnekt isn’t just another developer platform—it’s a <span className="font-bold">thriving hub</span> where coders,  
   innovators, and problem-solvers come together.  
</p>

          <ul className="mt-6 space-y-4">
  <li className="flex items-center gap-3">
    <span className="text-blue-600 text-2xl">🚀</span>  
    <p className="text-gray-700">
      <strong>Our Mission:</strong> To create a <span className="font-bold">global</span> developer ecosystem.
    </p>
  </li>
  <li className="flex items-center gap-3">
    <span className="text-blue-600 text-2xl">💡</span>  
    <p className="text-gray-700">
      <strong>Why It Matters:</strong> Finding <span className="font-bold">the right people & opportunities</span> is hard. We make it easy.
    </p>
  </li>
  <li className="flex items-center gap-3">
    <span className="text-blue-600 text-2xl">👥</span>  
    <p className="text-gray-700">
      <strong>Join Us:</strong> Be part of a <span className="font-bold">growing network</span> of devs ready to build together.
    </p>
  </li>
</ul>

          <button  onClick={()=> handleGetStarted()} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <img 
  src="https://images.unsplash.com/photo-1733503711063-3427bff34612?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  alt="Developers working" 
  className="rounded-xl shadow-lg w-full max-w-md"
/>

        </motion.div>
      </div>
    </section>
   </>
  )
}

export default AboutUs