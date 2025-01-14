import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import axiosInstance from "../config/axiosInstance";


const Feed = () => {
    const feed = useSelector((store) => store.feed);
    console.log(feed);
    const dispatch = useDispatch();

const getFeed = async() => {
    if(feed) return ;
    try {
        const res = await axiosInstance.get("/feed");
        dispatch(addFeed(res?.data?.data));
    } catch (error) {
        console.log(error);
    } 
}

useEffect(()=> {
    getFeed();
}, [])

if(!feed) return

if(feed.length <= 0) return <h1 className="flex justify-center m-10 text-bold text-2xl text-white">No new User Found!</h1>

  return (
    feed && (
    <div className="flex justify-center mt-20">
        <UserCard user={feed[0]}/>
    </div>
    )
  )
}

export default Feed