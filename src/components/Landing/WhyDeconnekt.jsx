
const WhyDevconnekt = () => {

  const highlights = [
    {
      title: "🎯 Company-Specific DSA Practice",
      problem: "“I don’t know what questions to practice.”",
      solution: "DevConnekt gives you a smart DSA sheet organized by companies like TCS, Wipro, and Accenture — practice what truly matters.",
     
    },
    {
      title: "🎤 Mock Interview with AI",
      problem: "“I’m nervous for real interviews.”",
      solution: "Simulate real interview scenarios with AI and receive instant, constructive feedback — build confidence before the real one.",
      
    },
    {
      title: "💬 Chat & Connect",
      problem: "“I want to grow but don’t have guidance.”",
      solution: "Form a support circle — talk to peers, ask doubts, collaborate, and find your tech tribe on DevConnekt.",
      
    },
    {
      title: "📰 Resource Hub",
      problem: "“Where do I even begin placement prep?”",
      solution: "From CS fundamentals to cover letters and blogs — your feed keeps you aligned and resourceful.",
     
    },
  ];

  

  return (
    <section className="w-full bg-[#F8F3D9] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#504B38] mb-12">
          💡 Why DevConnekt?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {highlights.map((items, idx) => (
            <div
              key={idx}
              className="bg-[#EBE5C2] border border-[#E5DFB9] rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-[#504B38] mb-2">{items.title}</h3>
              <p className="italic text-[#504B38]/80 mb-2">💭 <span className="text-[#504B38]">{items.problem}</span></p>
              <p className="text-[#504B38]/90">{items.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDevconnekt;
