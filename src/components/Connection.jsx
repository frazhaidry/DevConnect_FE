import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connection = () => {
    const connections = useSelector((store)=> store.connection)
    const dispatch = useDispatch();
    console.log(connections)
   
   const fetchConnetions = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/user/connections`,{withCredentials: true});
        console.log(res?.data?.data);
        dispatch(addConnections(res.data.data))
    } catch (error) {
        console.log(error.message);
    }
   }
 
   useEffect(()=>{
    fetchConnetions();
   },[])

   if(!connections) return;

   if(connections.length === 0) return <h1 className="text-bold text-2xl">No Connection Found!</h1>

  return (
    <div className="text-center my-10">
        <h1 className="text-bold text-white text-4xl">Connection</h1>

        {connections.map((connection) => {
            const {firstName, lastName, photoUrl, _id, age, gender, about} = connection;
            
            return(
                <div key={_id} className="p-10 flex p-4 my-10 border rounder-lg bg-base-300 w-1/2 mx-auto">
                      <div>
                        <img className="w-20 h-20 rounded-full" src={photoUrl} alt="User Photo" />
                      </div>
                      <div className=" text-left mx-4">
                        <h2 className="font-bold text-xl">{firstName+ " " + lastName}</h2>
                        {age && gender && <p>{age + ", " + gender}</p>}
                        <p>{about}</p>
                      </div>
                   </div>
            )
        })}





    </div>
  )
}

export default Connection