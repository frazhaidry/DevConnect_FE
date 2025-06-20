import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addUser } from "../../../utils/userSlice";
import axiosInstance from "../../../config/axiosInstance";

const EditProfile = ({ user, onClose }) => {
  // Controlled inputs for user profile fields
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
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

  // Adds a skill if it is non-empty and unique (case-insensitive)
  const addSkill = (skill) => {
    const trimmedSkill = skill.trim();
    if (
      trimmedSkill &&
      !skills.some((s) => s.toLowerCase() === trimmedSkill.toLowerCase())
    ) {
      setSkills((prevSkills) => [...prevSkills, trimmedSkill]);
    }
  };

  // Handles skill input key press events
  const handleSkillKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (skillInput.trim()) {
        addSkill(skillInput);
        setSkillInput("");
      }
    } else if (e.key === "Backspace" && skillInput === "" && skills.length) {
      // Remove last skill on backspace if input empty
      setSkills((prevSkills) => prevSkills.slice(0, -1));
    }
  };

  // Removes skill by index
  const handleRemoveSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  // Simple validation for required fields
  const isFormValid = firstName.trim() !== "" && lastName.trim() !== "";

  // Save profile async function with error handling and feedback
  const saveProfile = async () => {
    if (!isFormValid) {
      setError("First and Last name are required.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        photoUrl: photoUrl.trim(),
        age: age ? Number(age) : null,
        skills,
        gender,
        about,
      };

      const res = await axiosInstance.patch("/profile/edit", payload);
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      onClose();
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to save profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Autofocus skill input when skills change
  useEffect(() => {
    skillInputRef.current?.focus();
  }, [skills]);

 return (
    <div
      className="mx-auto mt-6 mb-6 p-6 max-w-xl w-full bg-[#EBE5C2] rounded-2xl shadow-lg border border-[#E5DFB9] flex flex-col"
      style={{ height: "80vh" }}
      role="dialog"
      aria-labelledby="editProfileTitle"
      aria-modal="true"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2
          id="editProfileTitle"
          className="text-2xl font-bold text-[#504B38]"
          tabIndex={-1}
        >
          Edit Profile
        </h2>
        <button
          className="text-[#B9B28A] hover:text-[#504B38] font-semibold"
          onClick={onClose}
          disabled={loading}
          aria-label="Cancel editing profile"
        >
          Cancel
        </button>
      </div>

      {/* Scrollable Form */}
      <form
        className="flex flex-col gap-4 overflow-y-auto"
        style={{ flexGrow: 1 }}
        onSubmit={(e) => {
          e.preventDefault();
          saveProfile();
        }}
        noValidate
      >
        {/* First Name */}
        <label htmlFor="firstName" className="text-[#504B38] font-semibold">
          First Name *
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          className="input input-bordered bg-[#F8F3D9] border-[#B9B28A] text-[#504B38] placeholder-[#B9B28A] focus:outline-none focus:ring-2 focus:ring-[#B9B28A] rounded-md px-3 py-2"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          disabled={loading}
          required
          autoComplete="given-name"
        />

        {/* Last Name */}
        <label htmlFor="lastName" className="text-[#504B38] font-semibold">
          Last Name *
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          className="input input-bordered bg-[#F8F3D9] border-[#B9B28A] text-[#504B38] placeholder-[#B9B28A] focus:outline-none focus:ring-2 focus:ring-[#B9B28A] rounded-md px-3 py-2"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          disabled={loading}
          required
          autoComplete="family-name"
        />

        {/* Photo URL */}
        <label htmlFor="photoUrl" className="text-[#504B38] font-semibold">
          Photo URL
        </label>
        <input
          type="url"
          id="photoUrl"
          value={photoUrl}
          className="input input-bordered bg-[#F8F3D9] border-[#B9B28A] text-[#504B38] placeholder-[#B9B28A] focus:outline-none focus:ring-2 focus:ring-[#B9B28A] rounded-md px-3 py-2"
          placeholder="Photo URL"
          onChange={(e) => setPhotoUrl(e.target.value)}
          disabled={loading}
          autoComplete="off"
        />

        {/* Age */}
        <label htmlFor="age" className="text-[#504B38] font-semibold">
          Age
        </label>
        <input
          type="number"
          id="age"
          value={age}
          className="input input-bordered bg-[#F8F3D9] border-[#B9B28A] text-[#504B38] placeholder-[#B9B28A] focus:outline-none focus:ring-2 focus:ring-[#B9B28A] rounded-md px-3 py-2"
          placeholder="Age"
          min={0}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d*$/.test(val)) setAge(val);
          }}
          disabled={loading}
          aria-describedby="ageDesc"
        />
        <small id="ageDesc" className="text-[#504B38] text-xs mb-2">
          Enter your age (optional)
        </small>

        {/* Gender */}
        <label htmlFor="gender" className="text-[#504B38] font-semibold">
          Gender
        </label>
        <select
          id="gender"
          className="select bg-[#F8F3D9] border border-[#B9B28A] text-[#504B38] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          disabled={loading}
          aria-label="Select Gender"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-Binary</option>
          <option value="other">Other</option>
        </select>

        {/* Skills */}
        <fieldset
          className="border border-[#B9B28A] p-3 rounded-md"
          disabled={loading}
        >
          <legend className="text-[#504B38] font-semibold mb-2">Skills</legend>
          <div
            className="flex flex-wrap gap-2 mb-3 max-h-24 overflow-y-auto"
            aria-live="polite"
            aria-atomic="true"
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#B9B28A] text-[#504B38] px-3 py-1 rounded-full text-sm flex items-center"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  className="ml-2 text-[#504B28A] hover:text-[#504B38] font-bold"
                  aria-label={`Remove skill ${skill}`}
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
            className="w-full bg-[#F8F3D9] border border-[#B9B28A] text-[#504B28A] p-2 rounded-md placeholder-[#B9B28A] focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
            placeholder="Type skill and press Enter"
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleSkillKeyPress}
            disabled={loading}
            aria-describedby="skillInputHelp"
            aria-label="Add skill"
            autoComplete="off"
          />
          <small id="skillInputHelp" className="text-[#504B28A] text-xs">
            Press Enter to add skill. Backspace removes last skill if input is
            empty.
          </small>
        </fieldset>

        {/* About */}
        <label htmlFor="about" className="text-[#504B28A] font-semibold mt-2">
          About
        </label>
        <textarea
          id="about"
          value={about}
          className="textarea bg-[#F8F3D9] border border-[#B9B28A] text-[#504B28A] rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#B9B28A]"
          placeholder="About"
          onChange={(e) => setAbout(e.target.value)}
          disabled={loading}
          rows={4}
          aria-multiline="true"
        />

        {/* Error message */}
        {error && (
          <p
            id="formError"
            className="text-red-600 text-sm mt-1"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        )}

        {/* Save button */}
        <button
          type="submit"
          className={`mt-4 py-2 rounded-md font-semibold text-white ${
            loading || !isFormValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#B9B28A] hover:bg-[#A79C76]"
          }`}
          disabled={loading || !isFormValid}
          aria-disabled={loading || !isFormValid}
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </form>

      {/* Toast notification */}
      {showToast && (
        <div
          className="toast toast-bottom toast-center"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="alert alert-success bg-[#B9B28A] text-[#504B38]">
            <span>Profile saved successfully</span>
          </div>
        </div>
      )}
    </div>
  );
};

EditProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photoUrl: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gender: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    about: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditProfile;
