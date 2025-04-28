import { useState } from "react"
import PropTypes from "prop-types"

import { useDispatch } from "react-redux"
import { addUser } from "../../../utils/userSlice"
import axiosInstance from "../../../config/axiosInstance"
import UserCard from "../../Cards/UserCard"


const EditProfile = ({user}) => {

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName]= useState(user.lastName)
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
    const [age, setAge] = useState(user.age || "")
    const [gender, setGender] = useState(user.gender || "")
    const [skills, setSkills] = useState(user.skills || [])
    const [skillInput, setSkillInput] = useState("");
    const [about, setAbout] = useState(user.about || "")
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false);

      // Handle Adding Skills
      const handleSkillKeyPress = (e) => {
        if (e.key === "Enter" && skillInput.trim() !== "") {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput(""); // Clear input after adding skill
            e.preventDefault();
        }
    };

     // Handle Removing Skills
     const handleRemoveSkill = (index) => {
      setSkills(skills.filter((_, i) => i !== index));
  };

    const saveProfile = async()=> {
        // Clear Errors
        setError("")
        setLoading(true);
        try {
          const res = await axiosInstance.patch("/profile/edit", {
            firstName,
            lastName,
            photoUrl,
            age,
            skills,
            gender,
            about,
          });
          
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false);
            }, 3000);   

        } catch (error) {
          setError(error?.response?.data || "Failed to save profile");
        } finally {
          setLoading(false);
        }
    }
    
  return(
    <>
        <div className="flex flex-col items-center p-6 md:flex-row md:justify-center md:gap-6">
      {/* Profile Edit Card */}
      <div className="card bg-base-300 w-full max-w-lg shadow-xl p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Profile</h2>
        <div className="flex flex-col gap-4">
          <input type="text" value={firstName} className="input input-bordered" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" value={lastName} className="input input-bordered" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
          <input type="text" value={photoUrl} className="input input-bordered" placeholder="Photo URL" onChange={(e) => setPhotoUrl(e.target.value)} />
          {/* {photoUrl && <img src={photoUrl} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />} */}
          <input type="number" value={age} className="input input-bordered" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
          <select className="select select-bordered" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            <option value="other">Other</option>
          </select>
            {/* Skills Input */}
            <div className="border p-3 rounded-lg w-full">
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                                    {skill}
                                    <button onClick={() => handleRemoveSkill(index)} className="ml-2 text-white">×</button>
                                </span>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={skillInput}
                            className="mt-2 w-full border p-2 rounded-lg"
                            placeholder="Type skill and press Enter"
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={handleSkillKeyPress}
                        />
                    </div>
          <textarea value={about} className="textarea textarea-bordered" placeholder="About" onChange={(e) => setAbout(e.target.value)}></textarea>
          <p className="text-red-500 text-sm">{error}</p>
          <button className={`btn btn-primary w-full ${loading ? "btn-disabled" : ""}`} onClick={saveProfile}>
            {loading ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </div>

      {/* User Card Preview */}
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} isProfile={true}/>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully</span>
          </div>
        </div>
      )}
    </div>
         </>
      )
     
    }

    EditProfile.propTypes = {
        user: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            photoUrl: PropTypes.string,
            skills: PropTypes.string,
            about: PropTypes.string,
            age: PropTypes.oneOfType([              // Age can be a number or null/undefined
                PropTypes.number,
                PropTypes.oneOf([null]),
              ]),
              gender: PropTypes.oneOf([               // Gender can be one of the predefined values
                "male",
                "female",
                "non-binary",
                "other",
                null,
              ]), 
        }).isRequired,
    };

export default EditProfile