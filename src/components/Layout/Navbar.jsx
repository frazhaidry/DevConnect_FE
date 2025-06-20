import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(resetFeed());
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const isOnFeed = location.pathname === "/feed";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-dark-card bg-opacity-90 backdrop-blur-md px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between border-b border-dark-border shadow-md">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-dark-accent font-extrabold text-2xl sm:text-3xl tracking-wide hover:text-dark-text transition-colors duration-300"
        >
          DevConnekt
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-dark-text ml-auto">
          <Link to="/" className="hover:text-dark-accent transition">Home</Link>
          <Link to="/resources" className="hover:text-dark-accent transition">Resources</Link>
          <Link to="/blogs" className="hover:text-dark-accent transition">Blogs</Link>

          {/* Practice Hub Dropdown */}
          <div className="relative group">
            <button className="hover:text-dark-accent transition">Practice Hub ▾</button>
            <div className="absolute hidden group-hover:block mt-2 bg-dark-card border border-dark-border rounded-lg shadow-lg z-50 w-48 text-left">
              <Link to="/dsa-sheet" className="block px-4 py-2 hover:bg-dark-accent hover:text-dark-card">DSA Sheet</Link>
              <Link to="/quiz" className="block px-4 py-2 hover:bg-dark-accent hover:text-dark-card">Quiz</Link>
              <Link to="/mock-interviews" className="block px-4 py-2 hover:bg-dark-accent hover:text-dark-card">Mock Interviews</Link>
            </div>
          </div>

          {user && (
            <Link
              to="/feed"
              className={`hover:text-dark-accent transition ${isOnFeed ? "text-dark-accent font-bold underline" : ""}`}
            >
              Feed
            </Link>
          )}

          {!user ? (
            <Link to="/login" className="text-dark-accent font-bold hover:text-dark-text transition">
              Login
            </Link>
          ) : (
            <div
              className="relative flex items-center gap-3 cursor-pointer select-none"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <p className="text-dark-text font-semibold flex items-center gap-1">
                Welcome, <span className="text-dark-accent">{user.firstName}</span>
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
              <div className="btn btn-ghost btn-circle avatar p-0 border-2 border-dark-accent rounded-full overflow-hidden w-10 h-10">
                <img alt="User avatar" src={user.photoUrl} />
              </div>

              {dropdownOpen && (
                <ul className="absolute right-0 top-full mt-2 bg-dark-card border border-dark-border rounded-md shadow-lg w-48 z-50 text-dark-text font-semibold">
                  <li><Link to="/profile" className="block px-4 py-2 hover:bg-dark-accent hover:text-dark-card">Profile</Link></li>
                  <li><Link to="/connections" className="block px-4 py-2 hover:bg-dark-accent hover:text-dark-card">Chat & Connections</Link></li>
                  <li><Link to="/requests" className="block px-4 py-2 hover:bg-dark-accent hover:text-dark-card">Requests</Link></li>
                  <li><button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-100 hover:text-red-600">Logout</button></li>
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dark-accent text-3xl"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-light-card text-light-text z-50 transition-transform duration-300 md:hidden shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "75%", maxWidth: "320px" }}
      >
        <div className="flex justify-end p-4 border-b border-light-border">
          <button className="text-light-accent text-3xl" onClick={() => setSidebarOpen(false)}>
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 p-6 font-semibold">
          <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/resources" onClick={() => setSidebarOpen(false)}>Resources</Link></li>
          <li><Link to="/blogs" onClick={() => setSidebarOpen(false)}>Blogs</Link></li>
          <li className="font-bold">Practice Hub</li>
          <li><Link to="/dsa-sheet" onClick={() => setSidebarOpen(false)}>DSA Sheet</Link></li>
          <li><Link to="/quiz" onClick={() => setSidebarOpen(false)}>Quiz</Link></li>
          <li><Link to="/mock-interviews" onClick={() => setSidebarOpen(false)}>Mock Interviews</Link></li>

          {user && (
            <>
              <li><Link to="/feed" onClick={() => setSidebarOpen(false)}>Feed</Link></li>
              <li><Link to="/profile" onClick={() => setSidebarOpen(false)}>Profile</Link></li>
              <li><Link to="/connections" onClick={() => setSidebarOpen(false)}>Connections</Link></li>
              <li><Link to="/requests" onClick={() => setSidebarOpen(false)}>Requests</Link></li>
              <li><button onClick={() => { handleLogout(); setSidebarOpen(false); }} className="text-red-600">Logout</button></li>
            </>
          )}

          {!user && (
            <li><Link to="/login" onClick={() => setSidebarOpen(false)}>Login</Link></li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
