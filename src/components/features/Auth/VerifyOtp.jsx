import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";
import { toast } from "react-toastify";
import AuthLayout from "./AuthLayout";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const emailId = location?.state?.emailId;

  const handleVerify = async () => {
    try {
      await axiosInstance.post("/verify-otp", { emailId, otp });
      toast.success("Signup completed successfully!");
      navigate("/feed"); // or wherever your app goes post-login
    } catch (err) {
      const message = err?.response?.data?.message || "Invalid or expired OTP.";
      setError(message);
      toast.error(message);
    }
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
          Verify OTP
        </h2>

        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full rounded-md px-4 py-2 border focus:outline-none focus:ring-2 placeholder-[#A6A083]"
          style={{
            borderColor: "#E5DFB9",
            backgroundColor: "#fff",
            color: "#504B38",
          }}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          onClick={handleVerify}
          className="w-full font-semibold py-2 rounded-md transition-all duration-300 hover:brightness-90"
          style={{
            backgroundColor: "#B9B28A",
            color: "#504B38",
          }}
        >
          Verify OTP
        </button>
      </div>
    </AuthLayout>
  );
};

export default VerifyOtp;
