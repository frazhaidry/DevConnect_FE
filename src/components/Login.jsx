import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"

const Login = () => {

    const [emailId, setEmailId] = useState("Elon@gmail.com")
    const [password, setPassword]= useState("Elon@123")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/login` , {
                emailId,
                password,
            },{
                withCredentials: true
            })
            // console.log(res.data)
            dispatch(addUser(res.data));
            return navigate("/")
            // console.log(res.data.firstName)
        } catch (error) {
            console.error(error);
        }
        

    }

  return (
    <div className="flex justify-center my-10">
     <div className="card bg-base-300 w-96 shadow-xl">
     <div className="card-body">
     <h2 className="card-title justify-center">Login</h2>
     <div>
     <label className="form-control w-full max-w-xs my-2">
          <div className="label">
    <span className="label-text">Email ID</span>
    
          </div>
  <input type="text" value={emailId} placeholder="email id" className="input input-bordered w-full max-w-xs" onChange={(e)=> setEmailId(e.target.value)} />
  
  </label>
     <label className="form-control w-full max-w-xs my-2">
          <div className="label">
    <span className="label-text">Password</span>
    
          </div>
  <input type="text" value={password} placeholder="password" className="input input-bordered w-full max-w-xs" onChange={(e) => setPassword(e.target.value)} />
  
  </label>
     </div>
          <div className="card-actions justify-center">
          <button className="btn btn-primary my-2" onClick={handleLogin}>Login</button>
          </div>
    </div>
</div>
     </div>
  )
}

export default Login