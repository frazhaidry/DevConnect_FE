
import { Link, useLocation } from "react-router-dom";

const SidebarLinks = () => {
  const location = useLocation();

  const links = [
    { path: "/profile", label: "Profile" },
    { path: "/connections", label: "Connections" },
    { path: "/requests", label: "Requests" },
    { path: "/blogs", label: "My Blogs" },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {links.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`text-white font-bold py-3 px-4 rounded transition duration-300 transform hover:scale-105 hover:bg-blue-600 ${
            location.pathname.startsWith(path) ? "bg-blue-700" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
