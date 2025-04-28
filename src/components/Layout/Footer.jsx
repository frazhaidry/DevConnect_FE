import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Logo & Copyright */}
        <div className="flex items-center space-x-3">
          {/* <img src="/logo.svg" alt="DevConnekt Logo" className="w-10 h-10" /> */}
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} DevConnekt. All rights reserved.
          </p>
        </div>

        {/* Center: Policy Links */}
        <nav className="text-sm flex flex-wrap gap-4 text-gray-300 text-center">
          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-white transition">
            Terms & Conditions
          </Link>
          <Link to="/cancellation-refund" className="hover:text-white transition">
            Cancellation & Refund Policy
          </Link>
          <Link to="/shipping-delivery" className="hover:text-white transition">
            Shipping & Delivery
          </Link>
          <Link to="/contact-us" className="hover:text-white transition">
            Contact Us
          </Link>
        </nav>

        {/* Right Side: Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="hover:text-red-500 transition" aria-label="YouTube">
            <i className="fab fa-youtube text-xl"></i>
          </a>
          <a href="#" className="hover:text-blue-600 transition" aria-label="Facebook">
            <i className="fab fa-facebook text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
