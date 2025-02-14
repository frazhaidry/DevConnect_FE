import { useState } from "react"
import PropTypes from "prop-types"
import UserCard from "./UserCard"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import axiosInstance from "../config/axiosInstance"


const EditProfile = ({user}) => {

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName]= useState(user.lastName)
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
    const [age, setAge] = useState(user.age || "")
    const [gender, setGender] = useState(user.gender || "")
    const [about, setAbout] = useState(user.about || "")
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const [showToast, setShowToast] = useState(false);

    const saveProfile = async()=> {
        // Clear Errors
        setError("")
        try {
          const res = await axiosInstance.patch("/profile/edit", {
            firstName,
            lastName,
            photoUrl,
            age,
            gender,
            about,
          });
          
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false);
            }, 3000);   

        } catch (error) {
            setError(error?.response?.data)
        }
    }
    
  return(
    <>
        <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
         <div className="card bg-base-300 w-96 shadow-xl">
         <div className="card-body">
         <h2 className="card-title justify-center">Edit Profile</h2>
         <div>
         <label className="form-control w-full max-w-xs my-2">
              <div className="label">
        <span className="label-text">First Name</span>
        
              </div>
      <input type="text" value={firstName} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e)=> setFirstName(e.target.value)} />
      
      </label>
         <label className="form-control w-full max-w-xs my-2">
              <div className="label">
        <span className="label-text">Last Name</span>
        
              </div>
      <input type="text" value={lastName} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e) => setLastName(e.target.value)} />
      
      </label>
         <label className="form-control w-full max-w-xs my-2">
              <div className="label">
        <span className="label-text">Photo Url</span>
        
              </div>
      <input type="text" value={photoUrl} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e) => setPhotoUrl(e.target.value)} />
      
      </label>
         <label className="form-control w-full max-w-xs my-2">
              <div className="label">
        <span className="label-text">Age</span>
        
              </div>
      <input type="text" value={age} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e) => setAge(e.target.value)} />
      
      </label>
         <label className="form-control w-full max-w-xs my-2">
              <div className="label">
        <span className="label-text">Gender</span>
        
              </div>
      <input type="text" value={gender} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e) => setGender(e.target.value)} />
      
      </label>
         <label className="form-control w-full max-w-xs my-2">
              <div className="label">
        <span className="label-text">About</span>
        
              </div>
      <input type="text" value={about} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e) => setAbout(e.target.value)} />
      
      </label>
      
         </div>
         <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center">
              <button className="btn btn-primary my-2" onClick={saveProfile}>Save Profile</button>
              </div>
        </div>
    </div>
         </div>
         <UserCard user={{firstName, lastName, photoUrl, age, gender, about}}/>
         
         </div>
        {showToast && (<div className="toast toast-top toast-center">
 
  <div className="alert alert-success">
    <span>Profile saved successfully</span>
  </div>
</div>)}
         </>
      )
     
    }

    EditProfile.propTypes = {
        user: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            photoUrl: PropTypes.string,
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