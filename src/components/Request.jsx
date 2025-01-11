import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../utils/constants"
import axios from "axios";
import { addRequest, removeRequest } from "../utils/requestSlice";
import { useEffect} from "react";


const Request = () => {
    const request = useSelector((store) => store.request);
    const dispatch = useDispatch();

    const reviewRequest = async(status, _id) => {
        try {
            const res = await axios.post(`${BASE_URL}/request/review/${status}/${_id}`, {}, {withCredentials: true})
            dispatch(removeRequest(_id))
        } catch (error) {
             console.log(error)
        }
    }
    const fetchRequest = async () => {
 
        try {
            const res = await axios.get(`${BASE_URL}/user/requests/received`, {withCredentials: true})
            console.log(res);
            console.log(res?.data?.data)
            dispatch(addRequest(res.data.data));

        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(()=>{
        fetchRequest();
    },[])




    if(!request) return;

    if(request.length === 0) return <h1 className="flex justify-center m-10 text-bold text-2xl text-white">No Request Found!</h1>
 
   return (
     <div className="text-center my-10">
         <h1 className="text-bold text-white text-4xl">Request</h1>
 
         {request.map((request) => {
             const {firstName, lastName, photoUrl, _id, age, gender, about} = request.fromUserId;
             
             return (
                <div
                  key={_id}
                  className="p-10 flex items-center justify-between my-10 border rounded-lg bg-base-300 w-1/2 mx-auto"
                >
                  {/* Image Section */}
                  <div className="flex-shrink-0">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={photoUrl}
                      alt="User Photo"
                    />
                  </div>
                  
                  {/* Text Section */}
                  <div className="flex-1 text-left mx-5">
                    <h2 className="font-bold text-xl">{`${firstName} ${lastName}`}</h2>
                    {age && gender && <p className="text-gray-600">{`${age}, ${gender}`}</p>}
                    <p className="text-gray-500">{about}</p>
                  </div>
                  
                  {/* Button Section */}
                  <div className="flex gap-2">
                    <button className="btn btn-primary" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                    <button className="btn btn-secondary" onClick={()=> reviewRequest("rejected", request._id)}>Reject</button>
                  </div>
                </div>
              );
              
         })}
 
 
 
 
 
     </div>
   )
}

export default Request