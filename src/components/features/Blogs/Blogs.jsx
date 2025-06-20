import { ArrowLeft } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import BlogCreate from "./BlogCreate"; // adjust the import path as needed
import { useSelector } from "react-redux";

const Blogs = () => {
  const user = useSelector((store)=> store.user)
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#F8F3D9] text-[#504B38] px-4 sm:px-8 py-6 relative">
      {/* Header */}
      <div className="w-full bg-[#EBE5C2] border border-[#E5DFB9] rounded-2xl p-6 sm:p-8 shadow-lg mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <Link
            to="/blogs"
            className="inline-flex items-center text-[#B9B28A] hover:text-[#504B38] transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2 text-[#504B38]" />
            <span className="text-sm font-medium text-[#504B38]">Back to Blogs</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#504B38] tracking-tight">
            Explore Blogs
          </h1>
          <p className="text-[#7A745A] text-sm sm:text-base">
            Read, write, and share your thoughts with the community.
          </p>
        </div>

        {user && (<button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center gap-2 bg-[#B9B28A] hover:bg-[#A39C79]  text-[#504B38] px-5 py-2.5 rounded-full font-semibold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#504B38]"
        >
          + New Blog
        </button>)}
      </div>

      {/* Blog Content Area */}
      <div className="w-full bg-[#EBE5C2] border border-[#E5DFB9] rounded-2xl p-6 sm:p-8 shadow-md min-h-[300px]">
        <Outlet />
      </div>

      {/* Modal for Create Blog */}
      {showCreateModal && (
        <BlogCreate onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default Blogs;
