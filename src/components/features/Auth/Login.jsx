import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../utils/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";
import AuthLayout from "./AuthLayout"; // Make sure the path is correct

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/feed";

  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post("/login", { emailId, password });
      dispatch(addUser(res.data));
      navigate(from || "/feed" , { replace: true });
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <AuthLayout>
      <div
        className="rounded-xl shadow-xl w-full max-w-md p-8 space-y-6"
        style={{
          backgroundColor: "#EBE5C2",
          border: "1px solid #E5DFB9",
        }}
      >
        <h2 className="text-3xl font-bold text-center" style={{ color: "#504B38" }}>
          Welcome Back
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email ID"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 placeholder-[#A6A083]"
            style={{
              borderColor: "#E5DFB9",
              backgroundColor: "#fff",
              color: "#504B38",
              fontSize: "1rem",
              caretColor: "#504B38",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 placeholder-[#A6A083]"
            style={{
              borderColor: "#E5DFB9",
              backgroundColor: "#fff",
              color: "#504B38",
              fontSize: "1rem",
              caretColor: "#504B38",
            }}
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          className="w-full font-semibold py-2 rounded-md transition-all duration-300 hover:brightness-90"
          style={{
            backgroundColor: "#B9B28A",
            color: "#504B38",
          }}
          onClick={handleLogin}
        >
          Login
        </button>

<p
  className="text-sm sm:text-base text-center font-medium text-[#504B38]"
>
  New here?{" "}
  <span
    onClick={() => navigate("/signup")}
    className="text-lg font-bold cursor-pointer hover:underline"
  >
    Sign up
  </span>
</p>

      </div>
    </AuthLayout>
  );
};

export default Login;
