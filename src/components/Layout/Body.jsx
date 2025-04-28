import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { useEffect } from "react";
import axiosInstance from "../../config/axiosInstance";


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
    <>
  <Navbar />
  <div className="grid grid-cols-5 gap-4  bg-[#121212] min-h-screen">
    {/* 80% Feed */}
    <div className="col-span-4">
      <main className="flex-grow">
        <Outlet /> {/* Feed content will be rendered here */}
      </main>
    </div>

    {/* 20% Sidebar with Links */}
    <div className="col-span-1 border-l border-white/20 bg-[#121212] p-4 flex flex-col h-screen">
  {/* Links section */}
  <div className="flex flex-col space-y-2">
    <Link
      to="/profile"
      className="text-white font-bold py-3 px-4 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-600"
    >
      Profile
    </Link>
    <Link
      to="/connections"
      className="text-white font-bold py-3 px-4 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-600"
    >
      Connections
    </Link>
    <Link
      to="/requests"
      className="text-white font-bold py-3 px-4 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-600"
    >
      Requests
    </Link>
    <Link
      to="/blogs"
      className="text-white font-bold py-3 px-4 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-600"
    >
      My Blogs
    </Link>
  </div>
    </div>
  </div>
  <Footer />
</>
  );
};

export default Body;