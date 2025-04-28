import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axiosInstance from "../../../config/axiosInstance"


const BlogEdit = () => {
  
    // This component is used to edit a blog post
    const {id} = useParams()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        tags: [],
    })

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchBlogDetails = async () => {

        try{
        const res = await axiosInstance.get(`/blogs/${id}`);
        const blog = res.data.data;

        setFormData({
            title: blog.title,
            content: blog.content,
            tags: blog.tags.join(", "), // Convert tags array to a comma-separated string
        })
        setLoading(false)

       }catch(error) {
        console.log("Failed to fetch blog details", error.message)
        setLoading(false)
    }
}

    useEffect(() => {
        fetchBlogDetails();
    },[id])

      // ✅ Correct input change handler
     const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = async (e) => {
    e.preventDefault(); // ✅ fixed typo
    try {
        const updateBlog = {
            title: formData.title,
            content: formData.content,
            tags: formData.tags.split(",").map((tag) => tag.trim()),
        };

        await axiosInstance.put(`/blogs/${id}`, updateBlog); // ✅ send the data
        navigate(`/blogs/${id}`); // ✅ navigate after success
    } catch (err) {
        console.log(err);
        setError("Failed to update blog");
    }
};

    if(loading) return <h1 className="text-center font-bold text-white">Loading blog.....</h1>

  return (
    <>
    <div className="max-w-2xl mx-auto p-8 rounded-2xl shadow-xl bg-[#1e1e1e]/90 backdrop-blur-md border border-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-white">✏️ Edit Blog</h2>
  
      {error && <p className="text-red-400 mb-4">{error}</p>}
  
      <form onSubmit={handleChange} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div>
          <label className="block mb-1 font-medium text-gray-300">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow hover:shadow-lg"
        >
          💾 Update Blog
        </button>
      </form>
    </div>
  </>
  )
};


export default BlogEdit