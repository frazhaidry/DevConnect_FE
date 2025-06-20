import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "DevConnekt has transformed how I collaborate with developers worldwide! Highly recommended.",
    name: "Sarah Johnson",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    text: "An incredible platform for networking and finding like-minded developers.",
    name: "James Carter",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    text: "I found my dream project partners on DevConnekt. A must-have for every developer!",
    name: "Anita Patel",
    role: "Full-Stack Developer",
    image: "https://i.pravatar.cc/100?img=30",
  },
  {
    text: "The blog and mock interview features are game-changers. DevConnekt is a one-stop platform.",
    name: "Liam Nguyen",
    role: "Backend Engineer",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "Clean UI, real community, and amazing support. Can’t ask for more!",
    name: "Zara Ali",
    role: "ML Engineer",
    image: "https://i.pravatar.cc/100?img=20",
  },
  {
    text: "I leveled up my skills and networked with top developers. Join now!",
    name: "Carlos Rivera",
    role: "DevOps Engineer",
    image: "https://i.pravatar.cc/100?img=40",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000); // auto-slide every 5s
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-light-background text-light-text">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Developers Say About <span className="text-light-accent">DevConnekt</span>
      </h2>

      <div className="relative max-w-2xl mx-auto">
        {/* Left/Right arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-light-card border border-light-border p-2 rounded-full shadow hover:scale-105 transition z-10"
        >
          <ChevronLeft className="text-light-text" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-light-card border border-light-border p-2 rounded-full shadow hover:scale-105 transition z-10"
        >
          <ChevronRight className="text-light-text" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-light-card border border-light-border rounded-2xl p-6 shadow-lg overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-12 h-12 rounded-full border-2 border-light-border"
              />
              <div>
                <h3 className="font-semibold text-light-text">{testimonials[index].name}</h3>
                <p className="text-sm text-light-accent">{testimonials[index].role}</p>
              </div>
            </div>
            <p className="italic text-light-text text-sm sm:text-base leading-relaxed">
              “{testimonials[index].text}”
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonial;
