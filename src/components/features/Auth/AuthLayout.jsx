const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full" style={{ backgroundColor: "#F8F3D9", color: "#504B38" }}>
      
      {/* Left Side - Interesting Facts */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-10 bg-[#EBE5C2] border-r border-[#E5DFB9]">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Welcome to DevConnekt 🚀</h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          Your Developer Network, Supercharged!
        </p>
        <ul className="text-[#504B38] text-sm sm:text-lg space-y-3 text-left">
          <li>💡 Did you know? 90% of devs find peer code reviews the best way to learn.</li>
          <li>🌐 Over 70% of devs contribute to open source projects globally.</li>
          <li>⚡ You can boost productivity by 23% with focused collaboration tools.</li>
          <li>💬 DevConnekt helps you connect, collaborate & grow faster!</li>
        </ul>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
