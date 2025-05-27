import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addUser } from "../../../utils/userSlice";
import axiosInstance from "../../../config/axiosInstance";

const EditProfile = ({ user, onClose }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [skills, setSkills] = useState(user.skills || []);
  const [skillInput, setSkillInput] = useState("");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const skillInputRef = useRef(null);

  const addSkill = (skill) => {
    const trimmedSkill = skill.trim();
    if (
      trimmedSkill !== "" &&
      !skills.some((s) => s.toLowerCase() === trimmedSkill.toLowerCase())
    ) {
      setSkills([...skills, trimmedSkill]);
    }
  };

  const handleSkillKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (skillInput.trim() !== "") {
        addSkill(skillInput);
        setSkillInput("");
      }
    }
    if (e.key === "Backspace" && skillInput === "" && skills.length > 0) {
      setSkills(skills.slice(0, skills.length - 1));
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const isFormValid = firstName.trim() !== "" && lastName.trim() !== "";

  const saveProfile = async () => {
    if (!isFormValid) {
      setError("First and Last name are required");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await axiosInstance.patch("/profile/edit", {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        photoUrl: photoUrl.trim(),
        age,
        skills,
        gender,
        about,
      });
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      onClose();
    } catch (error) {
      setError(error?.response?.data || "Failed to save profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (skillInputRef.current) skillInputRef.current.focus();
  }, [skills]);

  return (
    <div className="card w-full max-w-xl mx-auto p-6 rounded-2xl bg-black/50 backdrop-blur-md shadow-2xl border border-white/20 transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Edit Profile</h2>
        <button
          className="btn btn-sm border border-white/30 text-white hover:bg-white/10"
          onClick={onClose}
          disabled={loading}
        >
          Cancel
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {/* First Name */}
        <input
          type="text"
          value={firstName}
          className="input input-bordered bg-black/40 placeholder-white/70 text-white border-white/30 focus:border-blue-400"
          placeholder="First Name *"
          onChange={(e) => setFirstName(e.target.value)}
          disabled={loading}
        />

        {/* Last Name */}
        <input
          type="text"
          value={lastName}
          className="input input-bordered bg-black/40 placeholder-white/70 text-white border-white/30 focus:border-blue-400"
          placeholder="Last Name *"
          onChange={(e) => setLastName(e.target.value)}
          disabled={loading}
        />

        {/* Photo URL */}
        <input
          type="url"
          value={photoUrl}
          className="input input-bordered bg-black/40 placeholder-white/70 text-white border-white/30 focus:border-blue-400"
          placeholder="Photo URL"
          onChange={(e) => setPhotoUrl(e.target.value)}
          disabled={loading}
        />

        {/* Age */}
        <input
          type="number"
          value={age}
          className="input input-bordered bg-black/40 placeholder-white/70 text-white border-white/30 focus:border-blue-400"
          placeholder="Age"
          min={0}
          onChange={(e) => setAge(e.target.value)}
          disabled={loading}
        />

        {/* Gender */}
        <select
          className="select select-bordered bg-black/40 text-white border-white/30 focus:border-blue-400"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          disabled={loading}
        >
          <option className="text-black" value="">
            Select Gender
          </option>
          <option className="text-black" value="male">
            Male
          </option>
          <option className="text-black" value="female">
            Female
          </option>
          <option className="text-black" value="non-binary">
            Non-Binary
          </option>
          <option className="text-black" value="other">
            Other
          </option>
        </select>

        {/* Skills */}
        <div className="border border-white/30 p-4 rounded-lg">
          <label className="block mb-2 font-semibold text-white">Skills</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm flex items-center"
              >
                {skill}
                <button
                  onClick={() => handleRemoveSkill(index)}
                  className="ml-2 text-white hover:text-red-400"
                  disabled={loading}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            ref={skillInputRef}
            type="text"
            value={skillInput}
            className="w-full bg-black/30 border border-white/30 text-white p-2 rounded-md placeholder-white/70 focus:border-blue-400"
            placeholder="Type skill and press Enter"
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleSkillKeyPress}
            disabled={loading}
          />
        </div>

        {/* About */}
        <textarea
          value={about}
          className="textarea textarea-bordered bg-black/40 text-white placeholder-white/70 border-white/30 focus:border-blue-400"
          placeholder="About"
          onChange={(e) => setAbout(e.target.value)}
          disabled={loading}
          rows={5}
        />

        {/* Error */}
        {error && <p className="text-red-400 text-sm">{error}</p>}

        {/* Save Button */}
        <button
          className={`btn btn-primary w-full ${
            loading || !isFormValid ? "btn-disabled" : ""
          }`}
          onClick={saveProfile}
          disabled={loading || !isFormValid}
        >
          {loading ? (
            <>
              <span className="loading loading-spinner loading-sm mr-2"></span>
              Saving...
            </>
          ) : (
            "Save Profile"
          )}
        </button>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully</span>
          </div>
        </div>
      )}
    </div>
  );
};

EditProfile.propTypes = {
  user: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditProfile;
