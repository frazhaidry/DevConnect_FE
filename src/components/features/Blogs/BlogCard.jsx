import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";
import { useSelector } from "react-redux";

const BlogCard = ({ blog, onDelete }) => {
  const user = useSelector((store) => store.user); // get user from redux

  const { title, content, author, createdAt, _id } = blog;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axiosInstance.delete(`/blogs/${_id}`);
        onDelete(_id);
      } catch (error) {
        console.error("Failed to delete blog:", error);
      }
    }
  };

  return (
    <div className="dark:bg-[#EBE5C2] text-[#504B38] border border-[#E5DFB9] backdrop-blur-md shadow-xl rounded-2xl p-6 transition-all duration-300 hover:border-[#B9B28A] hover:shadow-2xl hover:-translate-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-3 line-clamp-2 leading-tight">
          {title}
        </h2>

        {user && blog.author?._id === user._id && (
             <button
             onClick={handleDelete}
              className="text-red-600 hover:text-red-700 text-xl"
             title="Delete Blog"
             >
    <AiTwotoneDelete />
  </button>
)}

      </div>

      <p className="text-sm mb-4 line-clamp-3">
        {content}
      </p>

      <div className="flex justify-between items-center text-xs text-[#7a745a] mb-4">
        <span>👤 {author?.firstName || "Unknown Author"}</span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </div>

      <div className="text-right">
        <Link to={`/blogs/${_id}`}>
          <button className="bg-[#B9B28A] hover:bg-[#A89F77] text-[#504B38] px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition-all duration-300">
            Read More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
