import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import axiosInstance from "../config/axiosInstance";
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

    if (!connections) return;
    if (connections.length === 0)
        return <h1 className="flex justify-center m-10 font-bold text-2xl text-white">No Connection Found!</h1>;

    // Filter logic
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
        
        <div className="text-center my-10">
            <h1 className="font-bold mb-10 text-white text-4xl">Connections</h1>

            {/* Search & Filter Bar */}
            
<div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center my-10 px-4">
  {/* Name Search */}
  <div className="relative w-full md:w-1/4">
    <input
      type="text"
      placeholder="Search by name"
      className="w-full bg-[#1E1E1E] text-white border border-gray-600 rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder-gray-400"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <Search className="absolute right-3 top-3.5 text-gray-400" size={20} />
  </div>

  {/* Gender Filter */}
  <select
    className="w-full md:w-1/4 bg-[#1E1E1E] text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
    className="w-full md:w-1/4 bg-[#1E1E1E] text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    value={ageRange}
    onChange={(e) => setAgeRange(e.target.value)}
  >
    <option value="">All Ages</option>
    <option value="18-25">18-25</option>
    <option value="26-35">26-35</option>
    <option value="36+">36+</option>
  </select>

  {/* Skill Search */}
  <div className="relative w-full md:w-1/4">
    <input
      type="text"
      placeholder="Search by skill"
      className="w-full bg-[#1E1E1E] text-white border border-gray-600 rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder-gray-400"
      value={skillFilter}
      onChange={(e) => setSkillFilter(e.target.value)}
    />
    <Filter className="absolute right-3 top-3.5 text-gray-400" size={20} />
  </div>
</div>
            {/* Connection List */}
            {filteredConnections.length === 0 ? (
                <h2 className="text-white text-xl mt-6">No matching connections found.</h2>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {filteredConnections.map((connection) => {
                  const { firstName, lastName, photoUrl, _id, age, gender, about, skills } = connection;
                  return (
                    <div
                      key={_id}
                     className="p-6 flex flex-col items-center gap-4 border border-gray-700 rounded-2xl bg-[#1E1E1E] shadow-[0_0_10px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(232,156,109,0.3)] hover:border-orange-500"
                    >
                      <img
                        className="w-24 h-24 rounded-full border-2 border-blue-500"
                        src={photoUrl}
                        alt="User Photo"
                      />
                      <div className="text-center">
                        <h2 className="font-bold text-2xl text-white">{firstName + " " + lastName}</h2>
                        {age && gender && (
                          <p className="text-gray-400 text-sm">{age + ", " + gender}</p>
                        )}
                        <p className="text-gray-300 mt-1">{about}</p>
                        {skills && (
                          <p className="mt-2 text-sm text-blue-400">
                            Skills: {skills.join(", ")}
                          </p>
                        )}
                        <Link to={"/chat/"+ _id}>  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                            Message
                        </button> </Link>
                       
                      </div>
                    </div>
                  );
                })}
              </div>
              
            )}
        </div>
    );
};

export default Connection;
