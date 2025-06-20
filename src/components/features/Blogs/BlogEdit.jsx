import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBlogDetails = async () => {
    try {
      const res = await axiosInstance.get(`/blogs/${id}`);
      const blog = res.data?.data;

      if (!blog) {
        setError("Blog not found");
        return;
      }

      setFormData({
        title: blog.title,
        content: blog.content,
        tags: blog.tags.join(", "),
      });

      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch blog details", err.message);
      setError("Failed to load blog");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedBlog = {
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
      };

      await axiosInstance.put(`/blogs/${id}`, updatedBlog);
      navigate(`/blogs/${id}`);
    } catch (err) {
      console.error(err);
      setError("Failed to update blog");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F3D9] flex items-center justify-center text-[#504B38] text-xl font-semibold">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F3D9] py-10 px-4">
      <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl shadow-xl bg-[#EBE5C2] border border-[#E5DFB9]">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#504B38]">
          ✏️ Edit Blog
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-center font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-[#504B38]">
          <div>
            <label htmlFor="title" className="block mb-1 font-semibold">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full rounded-lg px-4 py-2 bg-white border border-[#E5DFB9] focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
              required
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
              onChange={handleInputChange}
              rows="8"
              className="w-full rounded-lg px-4 py-2 bg-white border border-[#E5DFB9] focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
              required
            />
          </div>

          <div>
            <label htmlFor="tags" className="block mb-1 font-semibold">
              Tags (comma separated)
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full rounded-lg px-4 py-2 bg-white border border-[#E5DFB9] focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#B9B28A] text-[#504B38] font-semibold py-2.5 rounded-lg hover:bg-[#a49b74] transition-all shadow hover:shadow-lg"
          >
            💾 Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit;
