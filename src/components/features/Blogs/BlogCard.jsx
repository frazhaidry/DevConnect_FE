import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";


const BlogCard = ({blog, onDelete}) => {
    const id = blog?._id

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
          try {
            await axiosInstance.delete(`/blogs/${_id}`);
            onDelete(_id); // Notify parent to remove the blog from state
          } catch (error) {
            console.error("Failed to delete blog:", error);
          }
        }
      };


    const { title, content, author, createdAt , _id } = blog;

    return (
        <div className="dark:bg-[#1e1e1e]/90 backdrop-blur-md shadow-xl rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-blue-400 hover:shadow-2xl hover:-translate-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 line-clamp-2 leading-tight">
              {title}
            </h2>
            <button onClick={handleDelete} className="text-red-500 hover:text-red-600 text-xl">
              <AiTwotoneDelete />
            </button>
          </div>
    
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {content}
          </p>
    
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
            <span>👤 {author?.firstName || "Unknown Author"}</span>
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </div>
    
          <div className="text-right">
            <Link to={`/blogs/${_id}`}>
              <button className="bg-gradient-to-r from-blue-800 to-blue-400 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300">
                Read More →
              </button>
            </Link>
          </div>
        </div>
      );
}

export default BlogCard