import {
  FaUser, FaTransgender, FaInfoCircle, FaEnvelope,
  FaMapMarkerAlt, FaFileAlt, FaPercent
} from "react-icons/fa";
import { GiSkills, GiNetworkBars } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import { useSelector } from "react-redux";

const skillIcons = {
  React: <SiReact className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  Tailwind: <SiTailwindcss className="text-teal-400" />,
  MongoDB: <SiMongodb className="text-green-700" />,
};

const ProfileCard = ({ user, onEdit }) => {
  
  const totalFields = 5; // name, age, gender, about, skills
  const filledFields = [user.firstName, user.age, user.gender, user.about, user.skills?.length].filter(Boolean).length;
  const completion = Math.floor((filledFields / totalFields) * 100);

  return (
    <div className="w-full p-6 md:p-10">
      <div className="w-full bg-[#F8F3D9] border border-[#E5DFB9] rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row gap-10">

        {/* Left - Photo & Stats */}
        <div className="flex flex-col items-center lg:w-1/3 gap-4">
          <img
            src={user.photoUrl}
            className="w-44 h-44 rounded-full object-cover border-4 border-[#B9B28A]"
            alt="User"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold">{user.firstName} {user.lastName}</h2>
            <p className="text-sm text-[#7c7554]">{user.age} yrs • {user.gender}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/connections" className="btn btn-outline">
              <GiNetworkBars /> Connections
            </Link>
            <Link to={`/chat/${user._id}`} className="btn btn-outline">
              <FaEnvelope /> Message
            </Link>
            {/* <a
              href={user.resumeUrl || "#"}
              target="_blank"
              className="btn btn-outline"
              rel="noopener noreferrer"
            >
              <FaFileAlt /> View Resume
            </a> */}
          </div>
        </div>

        {/* Right - Info */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {/* Completion */}
         <div className="w-full mt-4">
            <label className="flex items-center gap-2 text-sm font-semibold"><FaPercent /> Profile Completion</label>
            <div className="w-full bg-[#EBE5C2] h-3 rounded-full overflow-hidden mt-1">
              <div
                className="bg-[#B9B28A] h-full transition-all duration-300"
                style={{ width: `${completion}%` }}
              ></div>
            </div>
            <p className="text-xs text-right mt-1 text-[#7c7554]">{completion}% complete</p>
          </div>

          {/* About */}
          <div>
            <label className="font-semibold flex items-center gap-2"><FaInfoCircle /> About</label>
            <p className="mt-1">{user.about}</p>
          </div>

          {/* Skills */}
          <div>
            <label className="font-semibold flex items-center gap-2"><GiSkills /> Skills</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-2">
              {user.skills?.map((skill, idx) => (
                <div key={idx} className="bg-[#EBE5C2] px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                  {skillIcons[skill] || <GiSkills />} {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap gap-10">
            <div>
              <label className="font-semibold flex items-center gap-2"><FaEnvelope /> Email</label>
              <p className="text-sm">{user.emailId}</p>
            </div>
            <div>
              <label className="font-semibold flex items-center gap-2"><FaMapMarkerAlt /> Location</label>
              <p className="text-sm">Mumbai, India</p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex justify-end">
            <button
              onClick={onEdit}
              className="px-4 py-2 border border-[#B9B28A] rounded hover:bg-[#EBE5C2]"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
