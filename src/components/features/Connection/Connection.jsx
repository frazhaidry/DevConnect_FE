import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../../../utils/connectionSlice";
import axiosInstance from "../../../config/axiosInstance";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Connection = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [skillFilter, setSkillFilter] = useState("");

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await axiosInstance.get("/user/connections");
        dispatch(addConnections(res.data.data));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchConnections();
  }, []);

  if (!connections) return null;

  const filteredConnections = connections.filter((connection) => {
    return (
      (connection.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        connection.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (genderFilter === "" || connection.gender === genderFilter) &&
      (ageRange === "" ||
        (ageRange === "18-25" && connection.age >= 18 && connection.age <= 25) ||
        (ageRange === "26-35" && connection.age >= 26 && connection.age <= 35) ||
        (ageRange === "36+" && connection.age >= 36)) &&
      (skillFilter === "" ||
        (connection.skills &&
          connection.skills.some((skill) =>
            skill.toLowerCase().includes(skillFilter.toLowerCase())
          )))
    );
  });

  return (
    <div className="bg-[#F8F3D9] min-h-screen py-10 px-4 md:px-10">
      {/* Heading */}
      <h1 className="font-bold text-4xl text-center text-[#504B38]">Connections</h1>

      {/* Welcome Message */}
      <div
        className="max-w-3xl mx-auto mt-4 mb-10 px-6 py-4 rounded-lg shadow-md text-center"
        style={{
          backgroundColor: "#EBE5C2",
          color: "#504B38",
          border: "1.5px solid #E5DFB9",
          fontWeight: "500",
        }}
      >
        Here you can find people with similar skills and interests. Use filters below to narrow your search.
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center mb-10">
        {/* Name Search */}
        <div className="relative w-full md:w-1/4">
          <input
            type="text"
            placeholder="Search by name"
            className="w-full bg-[#EBE5C2] border border-[#E5DFB9] text-[#504B38] placeholder-[#504B38] rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3.5 text-[#504B38]" size={20} />
        </div>

        {/* Gender Filter */}
        <select
          className="w-full md:w-1/4 bg-[#EBE5C2] text-[#504B38] border border-[#E5DFB9] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-Binary</option>
          <option value="other">Other</option>
        </select>

        {/* Age Filter */}
        <select
          className="w-full md:w-1/4 bg-[#EBE5C2] text-[#504B38] border border-[#E5DFB9] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
          value={ageRange}
          onChange={(e) => setAgeRange(e.target.value)}
        >
          <option value="">All Ages</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36+">36+</option>
        </select>

        {/* Skill Filter */}
        <div className="relative w-full md:w-1/4">
          <input
            type="text"
            placeholder="Search by skill"
            className="w-full bg-[#EBE5C2] border border-[#E5DFB9] text-[#504B38] placeholder-[#504B38] rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
            value={skillFilter}
            onChange={(e) => setSkillFilter(e.target.value)}
          />
          <Filter className="absolute right-3 top-3.5 text-[#504B38]" size={20} />
        </div>
      </div>

      {/* No Results */}
      {filteredConnections.length === 0 ? (
        <h2 className="text-[#504B38] text-xl text-center">No matching connections found.</h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredConnections.map((connection) => {
    const { firstName, lastName, photoUrl, _id, age, gender, about, skills } = connection;
    return (
      <div
        key={_id}
        className="bg-[#EBE5C2]/90 border border-[#E5DFB9] backdrop-blur-md rounded-2xl shadow-[0_5px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center"
      >
        {/* Avatar */}
        <img
          className="w-24 h-24 rounded-full border-4 border-[#B9B28A] shadow-sm"
          src={photoUrl}
          alt="User"
        />

        {/* Name & Info */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-[#504B38]">{firstName + " " + lastName}</h2>
          {age && gender && (
            <p className="text-sm text-[#504B38] opacity-70">{`${age}, ${gender}`}</p>
          )}
        </div>

        {/* About */}
        {about && (
          <p className="mt-2 text-sm text-[#504B38] text-center opacity-90">
            {about}
          </p>
        )}

        {/* Skills */}
        {skills && (
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            {skills.slice(0, 5).map((skill, index) => (
              <span
                key={index}
                className="bg-[#B9B28A] text-[#504B38] px-3 py-1 text-xs rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Message Button */}
        <Link to={`/chat/${_id}`} className="w-full mt-5">
          <button className="w-full bg-[#B9B28A] hover:bg-[#a9a17a] text-[#504B38] font-semibold py-2 rounded-lg transition duration-300 shadow-md">
            Message
          </button>
        </Link>
      </div>
    );
  })}
</div>
      )}
    </div>
  );
};

export default Connection;
