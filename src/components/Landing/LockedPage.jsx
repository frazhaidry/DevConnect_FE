
import { useNavigate, useLocation } from "react-router-dom";

const LockedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = new URLSearchParams(location.search).get("redirect") || "/";

  const handleLogin = () => {
    navigate("/login", { state: { from: redirectTo } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F3D9] text-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md">
        <h2 className="text-3xl font-bold text-[#504B38]">🔒 Access Restricted</h2>
        <p className="mt-4 text-[#6B6650]">You need to log in to access this feature.</p>
        <button
          onClick={handleLogin}
          className="mt-6 bg-[#504B38] text-white px-6 py-2 rounded-md hover:bg-[#3f3a2e]"
        >
          Log In to Continue →
        </button>
      </div>
    </div>
  );
};

export default LockedPage;
