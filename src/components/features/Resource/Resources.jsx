import {  useNavigate } from "react-router-dom";


const Resources = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8F3D9] text-[#504B38] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">📚 Resources Hub</h1>
        <p className="text-center text-lg mb-10 text-[#504B38]/80">
          Your one-stop destination for placement and technical prep 🚀
        </p>

        {/* 🧠 Placement Prep Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">🧠 Placement Prep</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Resume Templates - Coming Soon */}
            <div className="rounded-xl bg-[#EBE5C2] border-2 border-[#E5DFB9] p-4 shadow">
              <h3 className="font-bold text-lg">📄 Resume Templates</h3>
              <p className="text-sm text-[#504B38]/70">Coming Soon 🔒</p>
            </div>

            {/* Aptitude Practice - Coming Soon */}
            <div className="rounded-xl bg-[#EBE5C2] border-2 border-[#E5DFB9] p-4 shadow">
              <h3 className="font-bold text-lg">🧠 Aptitude Practice</h3>
              <p className="text-sm text-[#504B38]/70">Coming Soon 🔒</p>
            </div>

            {/* Interview Questions */}
            <div onClick={() => navigate("/resources/interview-questions")} className="rounded-xl bg-[#EBE5C2] border-2 border-[#E5DFB9] p-4 shadow cursor-pointer hover:scale-105 transition">
              <h3 className="font-bold text-lg">💬 Interview Questions</h3>
              <p className="text-sm text-[#504B38]/70">HR (General)</p>
            </div>

            {/* Cover Letter Guide */}
            <div onClick={() => navigate("/resources/cover-letter")} className="rounded-xl bg-[#EBE5C2] border-2 border-[#E5DFB9] p-4 shadow cursor-pointer hover:scale-105 transition">
              <h3 className="font-bold text-lg">✍️ Cover Letter Guide</h3>
              <p className="text-sm text-[#504B38]/70">Samples + How-to</p>
            </div>
          </div>
        </div>

      
{/* 🧠 CS Fundamentals */}
<div className="mb-12">
  <h2 className="text-2xl font-semibold mb-4">📘 CS Fundamentals</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {["DBMS", "OS", "CN", "OOPs", "Compiler"].map((subject) => (
      <div
        key={subject}
        onClick={() => navigate(`/resources/cs/${subject.toLowerCase()}`)}
        className="rounded-xl bg-[#EBE5C2] border-2 border-[#E5DFB9] p-4 shadow hover:scale-105 transition cursor-pointer"
      >
        <h3 className="font-bold text-lg">💡 {subject}</h3>
        <p className="text-sm text-[#504B38]/70">20 Get-to-Go Interview Questions</p>
      </div>
    ))}
  </div>
</div>

        {/* 🧑‍🎓 Future Feature (Hidden or Low Opacity for Now) */}
        <div className="text-center mt-16 opacity-50">
          <p className="text-md italic">🎤 Campus Interview Experience coming soon as a major feature!</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
