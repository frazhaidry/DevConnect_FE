import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice";
import axiosInstance from "../../config/axiosInstance";

// import SidebarLinks from "./SidebarLinks";
// import { Home, Book, Users, MessageCircle } from "lucide-react";
import FeedShimmer from "../features/Feed/FeedShimmer";

const ProtectedLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((store) => store.user);

  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    if (userData) {
      setLoading(false);
      return;
    }
    try {
      const res = await axiosInstance.get("/profile/view");
      dispatch(addUser(res.data));
      setLoading(false);
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/login", { replace: true ,state: { from: location.pathname } });
      } else {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <FeedShimmer/>
  }

  // const navItems = [
  //   { path: "/feed", icon: <Home size={22} />, label: "Feed" },
  //   { path: "/blogs", icon: <Book size={22} />, label: "Blogs" },
  //   { path: "/connections", icon: <Users size={22} />, label: "Connections" },
  //   { path: "/requests", icon: <MessageCircle size={22} />, label: "Requests" },
  // ];

  return (
    <div className="bg-[#F8F3D9] min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 ">
        <Outlet />
      </div>

      {/* Bottom navigation for mobile only */}
      {/* <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-[#EBE5C2] border-t border-[#E5DFB9] flex justify-around items-center py-2 z-50 shadow-md">
  {navItems.map((item) => {
    const isActive = location.pathname === item.path;
    return (
      <Link
        to={item.path}
        key={item.path}
        className={`flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-[#B9B28A] text-white scale-105"
            : "text-[#504B38] hover:text-black"
        }`}
      >
        {item.icon}
        <span className="text-[11px] mt-1">{item.label}</span>
      </Link>
    );
  })}
</div> */}
    </div>
  );
};

export default ProtectedLayout;
