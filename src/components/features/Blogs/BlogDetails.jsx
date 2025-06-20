import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../../config/axiosInstance";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const fetchBlogDetails = async () => {
    try {
      const { data } = await axiosInstance.get(`/blogs/${id}`);
      setBlog(data.data);
      setLoading(false);
      setError("");
    } catch (error) {
      console.error("Failed to fetch blog details", error.message);
      setError("Failed to load blog details. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  if (loading)
    return (
      <h1 className="text-center font-bold text-[#504B38] mt-12">
        Loading blog...
      </h1>
    );

  if (error)
    return (
      <div className="max-w-3xl mx-auto p-6 bg-[#EBE5C2] rounded-2xl shadow-md text-[#B94A48] border border-red-500 mt-12">
        <p className="text-center font-semibold">{error}</p>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#EBE5C2] rounded-2xl shadow-md border border-[#E5DFB9]">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#504B38]">
        {blog.title}
      </h1>

      <div className="text-sm text-[#7A745A] mb-6 flex flex-wrap items-center gap-2">
        <span>👤 {blog.author?.firstName || "Unknown"}</span>
        <span>·</span>
        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>

      <p className="text-base sm:text-lg text-[#504B38] leading-relaxed whitespace-pre-line mb-8">
        {blog.content}
      </p>

      {userId === blog.author?._id && (
        <div>
          <Link
            to={`/blogs/${blog._id}/edit`}
            className="inline-flex items-center gap-2 bg-[#B9B28A] hover:bg-[#A39C79] text-[#F8F3D9] px-5 py-2.5 rounded-full font-semibold shadow transition-all"
          >
            ✏️ Edit Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
