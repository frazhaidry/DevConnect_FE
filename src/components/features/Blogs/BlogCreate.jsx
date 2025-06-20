import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";

const BlogCreate = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBlog = {
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
      };

      await axiosInstance.post("/blogs", newBlog);
      onClose(); // Close modal after successful creation
      navigate("/blogs");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#F8F3D9]/80 backdrop-blur-sm z-40"
      ></div>

      {/* Modal Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-xl w-[90%] sm:w-full p-6 m-10  rounded-2xl shadow-xl bg-[#EBE5C2] border border-[#E5DFB9] text-[#504B38] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#504B38] hover:text-[#B9B28A] text-3xl font-bold"
          type="button"
        >
          <AiOutlineClose />
        </button>

        <h2 id="modal-title" className="text-3xl font-bold mb-6 text-center">
          📝 Create Blog
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-center font-semibold">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="title" className="block mb-1 font-semibold">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2 bg-white text-[#504B38] border border-[#E5DFB9] focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
              required
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label htmlFor="content" className="block mb-1 font-semibold">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="8"
              className="w-full rounded-lg px-4 py-2 bg-white text-[#504B38] border border-[#E5DFB9] focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
              required
              placeholder="Write your blog content here..."
            />
          </div>

          <div>
            <label htmlFor="tags" className="block mb-1 font-semibold">
              Tags (comma separated)
            </label>
            <input
              id="tags"
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2 bg-white text-[#504B38] border border-[#E5DFB9] focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
              placeholder="e.g. technology, health, lifestyle"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#B9B28A] text-[#504B38] font-semibold py-2.5 rounded-lg hover:bg-[#a49b74] transition-all shadow hover:shadow-lg"
          >
            🚀 Publish Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogCreate;
