import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaUsers, FaProjectDiagram, FaBriefcase, FaLightbulb, FaShieldAlt, FaRocket } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Faq from "./Faq";
// import Typewriter from "typewriter-effect";
// import { Button } from "../components/ui/button";
// import { ArrowRight, PhoneCall } from "lucide-react";



const LandingPage = () => {
    const navigate = useNavigate(); 
    const location = useLocation();
    const user = useSelector((store) => store.user);
    // const isAuthenticated = user !== null;
   
    useEffect(() => {
        if (location.state?.scrollTo) {
          const section = document.getElementById(location.state.scrollTo);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, [location]);

    const handleGetStarted = () => {
        if (user) {
          navigate("/feed", { replace: false });  // Redirect to feed if already logged in
        } else {
          navigate("/login",  { replace: false }); // Redirect to login if not logged in
        }
      };

  return (
   <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 text-gray-900">
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

      
      {/* Features Section */}
      <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
      <p className="mt-4 text-lg text-gray-600">Empowering developers with the right tools to connect, collaborate, and grow.</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {/* Feature Cards */}
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition transform duration-300">
            <feature.icon className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
      
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

      
      {/* Testimonials Section */}
      <section className="py-20 text-center px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12">What Developers Say About DevConnekt</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="max-w-sm p-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg text-left"
          >
            <div className="flex items-center gap-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-gray-300" />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-200 italic">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-16 bg-gray-900 text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">DevConnekt Insights</h2>
        <p className="text-lg text-gray-300 mb-12">Stay updated with the latest trends, tutorials, and developer insights.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
            <p className="text-gray-400 text-sm mb-2">By {blog.author} | {blog.date}</p>
            <p className="text-gray-300 mb-4">{blog.excerpt}</p>
            <a href={blog.link} className="text-blue-400 hover:text-blue-300 transition">Read More →</a>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition">View All Blogs</a>
      </div>
    </section>
      <Faq/>
     
    </div>
    <Footer/>
   </>
  );
};

// Features Data
const features = [
    {
      title: "Networking",
      description: "Connect with like-minded developers globally and build your professional circle.",
      icon: FaUsers,
    },
    {
      title: "Project Collaboration",
      description: "Find partners, contribute to open-source, and work on innovative ideas.",
      icon: FaProjectDiagram,
    },
    {
      title: "Job & Internship Board",
      description: "Discover exciting job opportunities and internships tailored for developers.",
      icon: FaBriefcase,
    },
    {
      title: "AI-Powered Matchmaking",
      description: "Smart recommendations to connect with developers who share your interests.",
      icon: FaLightbulb,
    },
    {
      title: "Secure Transactions",
      description: "Seamless and secure premium membership payments powered by Razorpay.",
      icon: FaShieldAlt,
    },
    {
      title: "Career Growth",
      description: "Access mentorship, industry insights, and growth opportunities in tech.",
      icon: FaRocket,
    },
  ];


  const testimonials = [
    {
      text: "DevConnekt has transformed the way I collaborate with developers worldwide! Highly recommended.",
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/100?img=5", // Placeholder Avatar
    },
    {
      text: "An incredible platform for networking and finding like-minded developers.",
      name: "James Carter",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/100?img=15", // Placeholder Avatar
    },
    {
      text: "I found my dream project partners on DevConnekt. A must-have for every developer!",
      name: "Anita Patel",
      role: "Full-Stack Developer",
      image: "https://i.pravatar.cc/100?img=30", // Placeholder Avatar
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Mastering React Hooks",
      author: "John Doe",
      date: "Feb 20, 2025",
      excerpt: "Explore how React Hooks can simplify state management and improve performance in your applications.",
      link: "#"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      author: "Jane Smith",
      date: "Feb 18, 2025",
      excerpt: "Learn how to create high-performance APIs using Express.js, caching techniques, and microservices architecture.",
      link: "#"
    },
    {
      id: 3,
      title: "The Future of AI in Web Development",
      author: "Alex Johnson",
      date: "Feb 15, 2025",
      excerpt: "Discover how AI-powered tools are transforming modern web development workflows and user experiences.",
      link: "#"
    }
  ];

export default LandingPage;
