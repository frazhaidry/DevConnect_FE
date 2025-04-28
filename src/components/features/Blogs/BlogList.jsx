import { useEffect, useState } from "react"
import axiosInstance from "../../../config/axiosInstance"
import BlogCard from "./BlogCard";


const BlogList = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    const handleDelete = (id) => {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      };

    const fetchBlogs = async () => {
        setLoading(true)
        try{
            const { data } = await axiosInstance.get("/blogs");
            setBlogs( data.data )
            setLoading(false)
    } catch( error){
        console.log(error)
        setLoading(false)
    }
}

    useEffect(() => {
      fetchBlogs()
    }, [])

  if(loading) return <h1 className="text-center font-bold text-white">Loading blogs.....</h1>
  return (
     <>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
         {blogs.map((blog) => (
              <BlogCard key = {blog._id} blog = {blog} onDelete={handleDelete}/>
         ))}
       </div>
     </>
  )
}


export default BlogList;