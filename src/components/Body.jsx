import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import axiosInstance from "../config/axiosInstance";

//hello world
const Body = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return; 

    try {
      const res = await axiosInstance.get("/profile/view");

      dispatch(addUser(res.data));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login"); // Redirect to login if unauthorized
      }
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    // Only fetch user data if not on the login page
    if (location.pathname !== "/login") {
      fetchUser();
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
    <main className="flex-grow"> 
      <Outlet /> \
    </main>
    <Footer />
  </div>
  );
};

export default Body;