import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { resetFeed } from "../utils/feedSlice";
import { FiMenu, FiX } from "react-icons/fi"; 
import { useState } from "react";

const Navbar = () => {
  const user  = useSelector((store) => store.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const handleLogout = async() => {
    try {
      await axios.post(`${BASE_URL}/logout` , {} , {withCredentials: true})
      dispatch(removeUser())
      dispatch(resetFeed());
       return navigate("/")
      //  window.location.href = "/";
    } catch (error) {
      console.log(error)
    }
  }

  // Function to scroll smoothly to sections on the landing page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
    {/* Navbar for Desktop */}
    <div className="navbar bg-gray-900 px-6">
      <div className="flex-1">
        <button className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
          DevConnekt
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-none gap-4">
        <Link to="/" className="btn btn-sm">
          Home
        </Link>
        <button
           className="btn btn-sm"
           onClick={() => {
           if (window.location.pathname !== "/") {
           navigate("/", { state: { scrollTo: "about" } });
           } else {
           document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          }
         }}
        >
       About Us
      </button>
      <button
           className="btn btn-sm"
           onClick={() => {
           if (window.location.pathname !== "/") {
           navigate("/", { state: { scrollTo: "contact" } });
           } else {
           document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
           }
          }}
        >
       Contact Us
      </button>
      <Link to="/Feed" className="btn btn-sm">
          Feed
        </Link>

        {user && (
          <div className="dropdown dropdown-end mx-5 flex">
            <p className="m-auto px-5">Welcome, {user.firstName}</p>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Photo" src={user.photoUrl} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Sidebar Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setSidebarOpen(true)}
      >
        <FiMenu />
      </button>
    </div>

    {/* Sidebar for Mobile */}
    <div
       className={`fixed top-0 left-0 h-full w-64 bg-base-300 shadow-lg z-[9999] transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:hidden`}
      style={{ position: "fixed", height: "100vh", width: "75%", maxWidth: "320px" }}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button className="text-2xl" onClick={() => setSidebarOpen(false)}>
          <FiX />
        </button>
      </div>

      {/* Sidebar Links */}
      <ul className="flex flex-col space-y-4 p-6">
        <li>
          <Link to="/" className="block text-lg" onClick={() => setSidebarOpen(false)}>
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
  )
}

export default Navbar