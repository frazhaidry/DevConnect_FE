import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "⚠️ All fields are required!" });
      return;
    }

    setStatus({ type: "loading", message: "⏳ Sending..." });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/send-email",
        formData
      );

      if (response.data.success) {
        setStatus({ type: "success", message: "✅ Email sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus({ type: "error", message: "❌ Failed to send email. Try again later." });
      }
    } catch (error) {
      console.error("API Error:", error);
      setStatus({ type: "error", message: "⚠️ Error sending email. Please try again." });
    }
  };

  return (
    <div className="container mx-auto max-w-lg p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Your Message</label>
          <textarea
            name="message"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>

        {status && (
          <p
            className={`mt-2 text-center font-medium ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
