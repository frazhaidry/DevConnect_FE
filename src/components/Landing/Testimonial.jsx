import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <>
          <section className="py-20 text-center px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12">What Developers Say About DevConnekt</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="max-w-sm p-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg text-left"
          >
            <div className="flex items-center gap-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-gray-300" />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-200 italic">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  )
}



const testimonials = [
    {
      text: "DevConnekt has transformed the way I collaborate with developers worldwide! Highly recommended.",
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/100?img=5", // Placeholder Avatar
    },
    {
      text: "An incredible platform for networking and finding like-minded developers.",
      name: "James Carter",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/100?img=15", // Placeholder Avatar
    },
    {
      text: "I found my dream project partners on DevConnekt. A must-have for every developer!",
      name: "Anita Patel",
      role: "Full-Stack Developer",
      image: "https://i.pravatar.cc/100?img=30", // Placeholder Avatar
    },
  ];


export default Testimonial