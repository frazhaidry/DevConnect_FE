

const Blog = () => {
  return (
   <>
   <section className="py-16 bg-gray-900 text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">DevConnekt Insights</h2>
        <p className="text-lg text-gray-300 mb-12">Stay updated with the latest trends, tutorials, and developer insights.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
            <p className="text-gray-400 text-sm mb-2">By {blog.author} | {blog.date}</p>
            <p className="text-gray-300 mb-4">{blog.excerpt}</p>
            <a href={blog.link} className="text-blue-400 hover:text-blue-300 transition">Read More →</a>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition">View All Blogs</a>
      </div>
    </section>
   </>
  )
}

const blogs = [
    {
      id: 1,
      title: "Mastering React Hooks",
      author: "John Doe",
      date: "Feb 20, 2025",
      excerpt: "Explore how React Hooks can simplify state management and improve performance in your applications.",
      link: "#"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      author: "Jane Smith",
      date: "Feb 18, 2025",
      excerpt: "Learn how to create high-performance APIs using Express.js, caching techniques, and microservices architecture.",
      link: "#"
    },
    {
      id: 3,
      title: "The Future of AI in Web Development",
      author: "Alex Johnson",
      date: "Feb 15, 2025",
      excerpt: "Discover how AI-powered tools are transforming modern web development workflows and user experiences.",
      link: "#"
    }
  ];

export default Blog