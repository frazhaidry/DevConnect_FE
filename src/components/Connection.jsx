import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import axiosInstance from "../config/axiosInstance";

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
            (skillFilter === "" || (connection.skills && connection.skills.includes(skillFilter)))
        );
    });

    return (
        <div className="text-center my-10">
            <h1 className="font-bold text-white text-4xl">Connections</h1>

            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-center my-6">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="input input-bordered w-full md:w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="select select-bordered w-full md:w-1/4"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                >
                    <option value="">All Genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="other">Other</option>
                </select>
                <select
                    className="select select-bordered w-full md:w-1/4"
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                >
                    <option value="">All Ages</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36+">36+</option>
                </select>
                <input
                    type="text"
                    placeholder="Search by skill"
                    className="input input-bordered w-full md:w-1/3"
                    value={skillFilter}
                    onChange={(e) => setSkillFilter(e.target.value)}
                />
            </div>

            {/* Connection List */}
            {filteredConnections.length === 0 ? (
                <h2 className="text-white text-xl mt-6">No matching connections found.</h2>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                    {filteredConnections.map((connection) => {
                        const { firstName, lastName, photoUrl, _id, age, gender, about, skills } = connection;
                        return (
                            <div key={_id} className="p-6 flex flex-col items-center gap-4 border rounded-lg bg-base-300 shadow-lg">
                                <img className="w-20 h-20 rounded-full" src={photoUrl} alt="User Photo" />
                                <div className="text-center">
                                    <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                                    {age && gender && <p>{age + ", " + gender}</p>}
                                    <p>{about}</p>
                                    {skills && <p className="mt-2 text-sm text-gray-300">Skills: {skills.join(", ")}</p>}
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
