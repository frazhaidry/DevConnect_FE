import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../utils/userSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";
import AuthLayout from "./AuthLayout";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  return (
   
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
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
        <button className="btn btn-primary w-full" onClick={handleLogin}>
          Login
        </button>
        <p className="text-center cursor-pointer mt-4" onClick={() => navigate("/signup")}>
          New user? Sign up here
        </p>
      </div>
    </div>
   
  );
};

export default Login;
