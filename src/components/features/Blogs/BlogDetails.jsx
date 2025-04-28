import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axiosInstance from "../../../config/axiosInstance";
import { useSelector } from "react-redux";

const BlogDetails = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const user = useSelector((store) => store.user);
    const userId = user?._id;


    const fetchBlogDetails = async () => {
        try {
            const { data } = await axiosInstance.get(`/blogs/${id}`);
            setBlog(data.data);
            setLoading(false);
    } catch (error){
        console.log("Failed to fetch blog details", error.message)
        setLoading(false)
    }
}

    useEffect(() => {
        fetchBlogDetails()
    },[id])

    if(loading) return <h1 className="text-center font-bold text-white">Loading blog.....</h1>
    return (
        <div className="max-w-3xl mx-auto p-6 bg-[#1e1e1e]/80 rounded-2xl shadow-md backdrop-blur-md border border-gray-700">
          <h1 className="text-4xl font-extrabold mb-4 text-white">{blog.title}</h1>
      
          <div className="text-sm text-gray-400 mb-6 flex items-center gap-2">
            <span>👤 {blog.author?.firstName || "Unknown"}</span>
            <span>·</span>
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
      
          <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
      
          {userId === blog.author?._id && (
            <div className="mt-8">
              <Link
                to={`/blogs/${blog._id}/edit`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 shadow hover:shadow-lg transition-all"
              >
                ✏️ Edit Blog
              </Link>
            </div>
          )}
        </div>
      );
}


export default BlogDetails