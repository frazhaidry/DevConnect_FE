import { FaUser, FaTransgender, FaInfoCircle } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { SiReact, SiJavascript, SiNodedotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const skillIcons = {
  "React": <SiReact className="text-blue-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  "Tailwind": <SiTailwindcss className="text-teal-400" />,
  "MongoDB": <SiMongodb className="text-green-700" />,
  // Add more if needed
};

const ProfileCard = ({ user, onEdit }) => {
  return (
    <div className="w-full px-4 md:px-12 py-6">
      <div className="relative  flex flex-col md:flex-row gap-6 p-6 border border-gray-700 rounded-xl bg-transparent text-white">

        {/* Edit Button */}
        <button
          className="absolute top-4 right-4 btn btn-sm btn-outline text-white border-gray-500 hover:bg-gray-800"
          onClick={onEdit}
        >
          Edit
        </button>

        {/* Left Section - Photo */}
        <div className="flex-shrink-0 flex justify-center items-start">
          <img
            src={user.photoUrl}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500"
          />
        </div>

        {/* Right Section - Details */}
        <div className="flex flex-col gap-4 w-full">
          <div>
            <label className="font-semibold flex items-center gap-2 text-gray-400"><FaUser /> Full Name</label>
            <p className="text-lg font-bold text-white">{user.firstName} {user.lastName}</p>
          </div>

          <div className="flex gap-8">
            <div>
              <label className="font-semibold flex items-center gap-2 text-gray-400"><FaUser /> Age</label>
              <p>{user.age}</p>
            </div>
            <div>
              <label className="font-semibold flex items-center gap-2 text-gray-400"><FaTransgender /> Gender</label>
              <p>{user.gender}</p>
            </div>
          </div>

          <div>
            <label className="font-semibold flex items-center gap-2 text-gray-400"><FaInfoCircle /> About</label>
            <p className="text-gray-200">{user.about}</p>
          </div>

          <div>
            <label className="font-semibold flex items-center gap-2 text-gray-400"><GiSkills /> Skills</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {user.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-full border border-gray-600"
                >
                  {skillIcons[skill] || <GiSkills />} {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
