import { useNavigate } from "react-router-dom";


const companies = [
  { name: "Accenture", path: "accenture" },
  { name: "TCS", path: "tcs" },
  { name: "Wipro", path: "wipro" },
  { name: "HashedIn", path: "hashedin" },
  { name: "Infosys", path: "infosys" },
];

const upcoming = ["Capgemini", "Cognizant", "Tech Mahindra"];

const Dsa_Sheet_Home = () => {
  const navigate = useNavigate();

 return (
    <div className="min-h-screen px-6 py-10 bg-[#F8F3D9] text-[#504B38]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-[#B9B28A] text-white text-sm font-semibold">
          🚧 DSA Sheet Coming Soon
        </div>

        <h1 className="text-4xl font-bold mb-2">🚀 Get Ready for DSA Rounds!</h1>
        <p className="text-lg mb-6 text-[#504B38]/80">
          Specially designed for <span className="font-semibold">Integral University</span> campus placements 💼
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 opacity-60 pointer-events-none">
          {["Accenture", "TCS", "Wipro", "HashedIn", "Infosys"].map((company) => (
            <div
              key={company}
              className="border-2 border-[#E5DFB9] rounded-2xl bg-[#EBE5C2] p-6 shadow-[0_4px_20px_rgba(80,75,56,0.2)]"
            >
              <h2 className="text-xl font-bold mb-2">{company}</h2>
              <p className="text-sm text-[#504B38]/70">Coming soon...</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-12">🔜 Upcoming Companies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Capgemini", "Cognizant", "Tech Mahindra"].map((name) => (
            <span
              key={name}
              className="px-4 py-2 bg-[#B9B28A] text-[#F8F3D9] rounded-full text-sm font-medium"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dsa_Sheet_Home