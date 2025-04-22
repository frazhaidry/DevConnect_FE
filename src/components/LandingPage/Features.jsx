import { FaUsers, FaProjectDiagram, FaBriefcase, FaLightbulb, FaShieldAlt, FaRocket } from "react-icons/fa";

const Features = () => {
  return (
    <>
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
    </>
  )
}


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


export default Features