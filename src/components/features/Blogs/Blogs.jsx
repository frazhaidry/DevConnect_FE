import { ArrowLeft } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Blogs = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto text-white">
          {/* Header with Back Button */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex flex-col gap-2">
              <Link
                to="/blogs"
                className="inline-flex items-center text-blue-400 hover:text-blue-500 transition mb-1"
              >
                <ArrowLeft className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">Back to Blogs</span>
              </Link>
              <h1 className="text-4xl font-extrabold text-white">Explore Blogs</h1>
              <p className="text-gray-300">Read, write, and share your thoughts.</p>
            </div>
      
            <Link
              to="create"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              <span className="text-lg font-medium">+ New Blog</span>
            </Link>
          </div>
      
          {/* Nested content */}
          <div>
            <Outlet />
          </div>
        </div>
      );
  };

export default Blogs