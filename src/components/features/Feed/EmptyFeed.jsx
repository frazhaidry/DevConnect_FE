import { Link } from "react-router-dom";

const EmptyFeed = () => {
  const links = [
    { to: "/mockinterview", label: "Mock Interview" },
    { to: "/resources", label: "Resource" },
    { to: "/quiz", label: "Quiz" },
    { to: "/connections", label: "Connection" },
    { to: "/blogs", label: "Blog" },
    { to: "/dsa-sheet", label: "DSA Sheet" },
  ];

  return (
    <div
      className="max-w-xl mx-auto p-8 rounded-2xl shadow-lg bg-[#EBE5C2] border border-[#E5DFB9] text-[#504B38] text-center"
      style={{ minHeight: "300px" }}
    >
      <div className="text-6xl mb-4">😞</div>
      <h2 className="text-2xl font-extrabold mb-2">Oops! No users found.</h2>
      <p className="mb-6 text-[#504B38cc]">
        Looks like there’s no one here right now. Try exploring other sections:
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="px-4 py-2 rounded-full border border-[#E5DFB9] bg-[#F8F3D9] text-[#504B38] font-semibold hover:bg-[#B9B28A] hover:text-[#EBE5C2] transition-colors shadow-sm"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EmptyFeed;
