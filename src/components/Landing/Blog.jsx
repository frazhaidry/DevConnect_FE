const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-[#F8F3D9] text-[#504B38] px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">DevConnekt Insights</h2>
        <p className="text-lg text-[#6b654b] mb-12">
          Stay updated with the latest trends, tutorials, and developer insights.
        </p>
      </div>

      <div id="blog-posts" className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#EBE5C2] p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-[#E5DFB9]"
          >
            <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-[#6b654b] mb-1">
              By {blog.author} | {blog.date}
            </p>
            <p className="text-base text-[#504B38] mb-4">{blog.excerpt}</p>
            <a
              href={blog.link}
              className="text-[#B9B28A] hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/blogs"
          className="bg-[#B9B28A] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#a69f7a] transition"
        >
          View All Blogs
        </a>
      </div>
    </section>
  );
};

const blogs = [
  {
    id: 1,
    title: "Mastering React Hooks",
    author: "John Doe",
    date: "Feb 20, 2025",
    excerpt:
      "Explore how React Hooks can simplify state management and improve performance in your applications.",
    link: "#",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    author: "Jane Smith",
    date: "Feb 18, 2025",
    excerpt:
      "Learn how to create high-performance APIs using Express.js, caching techniques, and microservices architecture.",
    link: "#",
  },
  {
    id: 3,
    title: "The Future of AI in Web Development",
    author: "Alex Johnson",
    date: "Feb 15, 2025",
    excerpt:
      "Discover how AI-powered tools are transforming modern web development workflows and user experiences.",
    link: "#",
  },
];

export default Blog;
