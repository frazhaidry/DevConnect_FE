import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Quiz = () => {
   const navigate = useNavigate();
  const user = useSelector((store) => store.user); // assuming you store user login state

  return (
    <div className="min-h-screen px-6 py-12 bg-[#F8F3D9] text-[#504B38] flex flex-col items-center justify-center">
      <div className="max-w-5xl text-center space-y-10">
        <h1 className="text-4xl font-bold text-[#504B38]">
          📚 AI-Powered Quiz Arena — Coming Soon!
        </h1>
        <p className="text-lg leading-8 text-[#504B38]/80">
          Practice makes placement-ready! We’re building an intelligent quiz system powered by AI to help you test and improve your Computer Science knowledge interactively.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-6">
          <div className="bg-[#EBE5C2] border border-[#E5DFB9] rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">🧠 Smart Quiz Generator</h2>
            <p>
              Choose your topic, difficulty, and question count. Our AI will
              generate a quiz just for you — fresh every time.
            </p>
          </div>

          <div className="bg-[#EBE5C2] border border-[#E5DFB9] rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">📊 Personalized Feedback</h2>
            <p>
              Get instant insights after each quiz: accuracy, strengths,
              weaknesses, and learning suggestions tailored just for you.
            </p>
          </div>

          <div className="bg-[#EBE5C2] border border-[#E5DFB9] rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">🚀 Challenge Mode & Leaderboards</h2>
            <p>
              Compete in daily & weekly challenges, climb the leaderboard,
              and unlock exclusive resources as rewards!
            </p>
          </div>

          <div className="bg-[#EBE5C2] border border-[#E5DFB9] rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">🤖 Ask-AI Quiz Buddy</h2>
            <p>
              Want to be quizzed on OS scheduling or DBMS joins? Just ask. Our AI will quiz you in real-time with explanations.
            </p>
          </div>
        </div>

        {user ? (
          <div className="mt-10">
            <p className="text-lg font-semibold text-[#504B38]">✨ You’re in! This feature is currently under development and will be live soon.</p>
            <p className="text-[#504B38]/70">Stay tuned. New ways to learn and challenge yourself are coming!</p>
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center space-y-4">
            <p className="text-lg font-semibold text-[#504B38]">
              🔒 Login required to access Quiz Arena
            </p>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-[#B9B28A] text-white rounded-xl hover:bg-[#A09C6D] transition text-lg"
            >
              Login / Register to Unlock
            </button>
            <p className="text-sm text-[#504B38]/70">
              Join us now to get notified when quizzes go live!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz