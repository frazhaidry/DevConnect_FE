import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      try {
        const res = await axiosInstance.post("/login", { emailId, password });
        dispatch(addUser(res.data));
        navigate("/feed");
      } catch (error) {
        setError(error?.response?.data || "Something went wrong");
      }
    };
  
    const handleSignUp = async () => {
       
        try {
          const res = await axiosInstance.post("/signup", { firstName, lastName, emailId, password });
          dispatch(addUser(res.data.data));
      
          setFirstName("");
          setLastName("");
          setEmailId("");
          setPassword("");
      
          toast.success("Signup successful! Redirecting to login...", {position: "top-center"}); 
          navigate("/login")
        } catch (error) {
          console.error("Signup Error:", error?.response?.data);
          setError(error?.response?.data || "Something went wrong");
          toast.error("Signup failed. Try again.");
        } 
    };
  
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
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6">{isLoginForm ? "Login" : "Sign Up"}</h2>
            {!isLoginForm && (
              <>
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
              </>
            )}
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
            <button
              className="btn btn-primary w-full mb-4"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
            <p
              className="text-center cursor-pointer"
              onClick={() => setIsLoginForm((prev) => !prev)}
            >
              {isLoginForm ? "New User? Sign up here" : "Existing User? Login here"}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;