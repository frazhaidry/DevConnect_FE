import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";

const BlogCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBlog = {
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim())
      };

      await axiosInstance.post("/blogs", newBlog);
      navigate("/blogs");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-2xl shadow-xl bg-[#1e1e1e]/90 backdrop-blur-md border border-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-white">📝 Create Blog</h2>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-300">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="8"
            className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-300">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow hover:shadow-lg"
        >
          🚀 Publish Blog
        </button>
      </form>
    </div>
  );
};

export default BlogCreate;
