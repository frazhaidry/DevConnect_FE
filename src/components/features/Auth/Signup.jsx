
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";
import { toast } from "react-toastify";


const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const navigate = useNavigate();
  
    const handleSignUp = async () => {
      try {
        await axiosInstance.post("/signup", {
          firstName,
          lastName,
          emailId,
          password,
        });
  
        toast.success("Signup successful! Redirecting to login...");
        navigate("/login");
      } catch (error) {
        setError(error?.response?.data || "Something went wrong");
        toast.error("Signup failed. Try again.");
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input input-bordered w-full mb-4 bg-transparent text-white"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input input-bordered w-full mb-4 bg-transparent text-white"
          />
          <input
            type="text"
            placeholder="Email ID"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="input input-bordered w-full mb-4 bg-transparent text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full mb-4 bg-transparent text-white"
          />
          <p className="text-red-500 mb-2">{error}</p>
          <button className="btn btn-primary w-full" onClick={handleSignUp}>
            Sign Up
          </button>
          <p className="text-center cursor-pointer mt-4" onClick={() => navigate("/login")}>
            Already have an account? Login here
          </p>
        </div>
      </div>
    );
}

export default SignUp

