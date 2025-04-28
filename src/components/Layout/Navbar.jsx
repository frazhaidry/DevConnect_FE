import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import { removeUser } from "../../utils/userSlice";
import { resetFeed } from "../../utils/feedSlice";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(resetFeed());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-[#fefdff] px-10 py-5 text-black border-b border-b-white border-b-4 border-[#272727]">
        <div className="flex-1">
          <button className=" text-blue-600 font-semibold btn btn-ghost text-2xl text-[#E0E0E0]" onClick={() => navigate("/")}>
            DevConnekt
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-none gap-8">
          <Link to="/" className="text-black font-semibold  hover:text-blue-500 link-underline transition duration-300">
            Home
          </Link>
          <button
            className="text-black font-semibold hover:text-blue-500 link-underline transition duration-300"
            onClick={() =>
              window.location.pathname !== "/"
                ? navigate("/", { state: { scrollTo: "about" } })
                : scrollToSection("about")
            }
          >
            About Us
          </button>
          {/* <button
            className=" font-semibold text-black hover:text-blue-500 link-underline transition duration-300"
            onClick={() =>
              window.location.pathname !== "/"
                ? navigate("/", { state: { scrollTo: "blog" } })
                : scrollToSection("blog")
            }
          >
            Blogs
          </button> */}
          <Link 
           to="/blogs"
             className=" font-semibold text-black hover:text-blue-500 link-underline transition duration-300">
              Blogs
          </Link>
         <Link 
           to="/feed" 
           className="text-white border border-transparent p-2 font-bold rounded-md bg-gradient-to-r from-blue-700 to-emerald-500 bg-[length:200%_200%] hover:bg-right text-sm shadow-lg transition-all duration-300 hover:scale-105"
            >
          🚀 Feed
             </Link>


          {user && (
            <div className="dropdown dropdown-end mx-5 flex">
              <p className="text-black font-semibold m-auto px-5">
                  Welcome, <span className="text-cyan-600">{user.firstName}</span>
              </p>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User" src={user.photoUrl} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#1E1E1E] rounded-box z-[1] mt-3 w-52 p-2 shadow border border-[#272727] text-[#E0E0E0]">
                <li>
                  <Link to="/profile" className="justify-between text-white font-semibold">
                    Profile
                    <span className="badge bg-[#4F46E5] text-white">New</span>
                  </Link>
                </li >
                <li className="text-white font-semibold"><Link to="/connections">Connections</Link></li>
                <li className="text-white font-semibold"><Link to="/requests">Requests</Link></li>
                <li>
                  <a onClick={handleLogout} className=" font-semibold text-red-500 cursor-pointer">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Sidebar Toggle */}
        <button className="md:hidden text-2xl text-[#E0E0E0]" onClick={() => setSidebarOpen(true)}>
          <FiMenu />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1E1E1E] text-[#E0E0E0] shadow-lg z-[9999] transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
        style={{ position: "fixed", height: "100vh", width: "75%", maxWidth: "320px" }}
      >
        <div className="flex justify-end p-4">
          <button className="text-2xl text-[#E0E0E0]" onClick={() => setSidebarOpen(false)}>
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <Link to="/" className="block text-lg text-[#E0E0E0]" onClick={() => setSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <button
              className="block text-lg"
              onClick={() => {
                scrollToSection("about");
                setSidebarOpen(false);
              }}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              className="block text-lg"
              onClick={() => {
                scrollToSection("contact");
                setSidebarOpen(false);
              }}
            >
              Contact Us
            </button>
          </li>
          <li>
            <button
              className="block text-lg"
              onClick={() => {
                user ? navigate("/feed") : navigate("/login");
                setSidebarOpen(false);
              }}
            >
              Feed
            </button>
          </li>
          {user && (
            <>
              <li>
                <Link to="/profile" className="block text-lg" onClick={() => setSidebarOpen(false)}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections" className="block text-lg" onClick={() => setSidebarOpen(false)}>
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/requests" className="block text-lg" onClick={() => setSidebarOpen(false)}>
                  Requests
                </Link>
              </li>
              <li>
                <button className="block text-lg text-red-500" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
