import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";
import { toast } from "react-toastify";
import AuthLayout from "./AuthLayout"; // ✅ Make sure path is correct

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await axiosInstance.post("/signup", { firstName, lastName, emailId, password });
      toast.success("Signup successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      toast.error("Signup failed. Try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSignUp();
  };

  return (
    <AuthLayout>
      <div
        className="w-full max-w-md rounded-xl shadow-md p-8 space-y-4"
        style={{
          backgroundColor: "#EBE5C2",
          border: "1px solid #E5DFB9",
          color: "#504B38",
        }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#504B38" }}>
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          className="w-full font-semibold py-2 rounded-md transition-all duration-300 hover:brightness-90"
          style={{
            backgroundColor: "#B9B28A",
            color: "#504B38",
          }}
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        <p className="text-center mt-4 text-sm" style={{ color: "#504B38" }}>
  Already have an account?{" "}
  <span
    onClick={() => navigate("/login")}
    className="text-lg px-1 font-bold rounded cursor-pointer transition hover:underline hover:bg-[#E5DFB9]"
    style={{ color: "#504B38" }}
  >
    Login here
  </span>
</p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
