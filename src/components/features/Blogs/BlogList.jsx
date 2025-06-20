import { useEffect, useState } from "react";
import axiosInstance from "../../../config/axiosInstance";
import BlogCard from "./BlogCard";


const BlogList = () => {
 
  
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog._id !== id));
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get("/blogs");
      setBlogs(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading)
    return (
      <h1 className="text-center text-xl font-semibold text-[#504B38] py-10">
        Loading blogs...
      </h1>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 sm:p-4">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BlogList;
