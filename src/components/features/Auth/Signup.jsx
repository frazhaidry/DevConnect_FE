import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";
import { toast } from "react-toastify";
import AuthLayout from "./AuthLayout";

const SignUp = () => {
 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  emailId: "",
  password: "",
});
const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

const handleSendOtp = async () => {
  const { firstName, lastName, emailId, password } = formData;

  // optional: validate before send

  setLoading(true);
  try {
    await axiosInstance.post("/send-otp", {
      firstName,
      lastName,
      emailId,
      password,
    });

    toast.success("OTP sent to your email.");
    navigate("/verify-otp", { state: { emailId } });
  } catch (error) {
    const message = error?.response?.data?.message || "Failed to send OTP.";
    setError(message);
    toast.error(message);
  } finally {
    setLoading(false);
  }
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendOtp();
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
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 placeholder-[#A6A083]"
          style={{
            borderColor: "#E5DFB9",
            backgroundColor: "#fff",
            color: "#504B38",
          }}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 placeholder-[#A6A083]"
          style={{
            borderColor: "#E5DFB9",
            backgroundColor: "#fff",
            color: "#504B38",
          }}
        />

        <input
          type="email"
          name="emailId"
          placeholder="your-name@gmail.com"
          value={formData.emailId}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 placeholder-[#A6A083]"
          style={{
            borderColor: "#E5DFB9",
            backgroundColor: "#fff",
            color: "#504B38",
          }}
        />

        <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    onKeyDown={handleKeyDown}
    className="w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 placeholder-[#A6A083]"
    style={{
      borderColor: "#E5DFB9",
      backgroundColor: "#fff",
      color: "#504B38",
    }}
  />

  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#504B38] cursor-pointer"
  >
    {showPassword ? (
      // 👁️ eye open icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zM10 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ) : (
      // 👁️‍🗨️ eye closed icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-10-7 .33-1.57 1.2-3.05 2.41-4.24m3.47-2.13a9.96 9.96 0 014.09-.63m4.53 2.1A10.05 10.05 0 0121 12c-.16.8-.5 1.56-.96 2.25M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 10.5l-18-18"
        />
      </svg>
    )}
  </span>
</div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
  className="w-full font-semibold py-2 rounded-md transition-all duration-300 hover:brightness-90 flex justify-center items-center"
  style={{
    backgroundColor: "#B9B28A",
    color: "#504B38",
    opacity: loading ? 0.6 : 1,
    cursor: loading ? "not-allowed" : "pointer",
  }}
  onClick={handleSendOtp}
  disabled={loading}
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5 mr-2 text-[#504B38]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
      Sending...
    </>
  ) : (
    "Send OTP"
  )}
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
