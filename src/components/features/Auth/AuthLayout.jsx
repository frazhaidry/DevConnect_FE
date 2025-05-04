
const AuthLayout = ({ children }) => {
    return (
      <div className="flex flex-col lg:flex-row h-screen w-full bg-gray-900 text-white">
        {/* Right Side - DevConnekt Info */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-10 bg-gradient-to-br from-blue-700 to-purple-900">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Welcome to DevConnekt 🚀</h1>
          <p className="text-base sm:text-lg text-gray-200 text-center max-w-md mb-6">
            Your Developer Network, Supercharged! Connect, collaborate, and showcase your projects with like-minded developers.
          </p>
          <ul className="text-gray-300 text-sm sm:text-lg space-y-2 sm:space-y-3 text-left">
            <li>👨‍💻 Find Dev Matches – Connect with developers who share your interests.</li>
            <li>🚀 Showcase Projects – Get feedback & recognition for your work.</li>
            <li>🔗 Collaborate & Build – Work on exciting projects together.</li>
            <li>🌍 Join a Global Community – Network with devs worldwide.</li>
          </ul>
        </div>
  
        {/* Left Side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
          {children}
        </div>
      </div>
    );
  };
  
  export default AuthLayout;
  