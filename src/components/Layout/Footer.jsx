import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F8F3D9] border-t border-[#E5DFB9] text-[#504B38] w-full px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand + CTA */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#B9B28A]">DevConnekt</h2>
          <p className="text-sm text-[#7c7554]">Connecting developers through resources, challenges, and collaboration.</p>
          <Link
            to="/signup"
            className="inline-block bg-[#B9B28A] text-white text-sm px-4 py-2 rounded-full hover:bg-[#a9a079] transition"
          >
            🚀 Join the Community
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/resources" className="hover:underline">Resources</Link></li>
            <li><Link to="/quiz" className="hover:underline">Quizzes</Link></li>
            <li><Link to="/dsa-sheet" className="hover:underline">DSA Sheet</Link></li>
            <li><Link to="/blogs" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/cancellation-refund" className="hover:underline">Cancellation & Refund</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#1DA1F2]" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="hover:text-[#FF0000]" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="hover:text-[#1877F2]" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-[#7c7554]">
        © {new Date().getFullYear()} DevConnekt — Crafted with ❤️ for developers.
      </div>
    </footer>
  );
};

export default Footer;
