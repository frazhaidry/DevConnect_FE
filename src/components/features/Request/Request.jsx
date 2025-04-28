import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "../../../config/axiosInstance";
import { addRequest, removeRequest } from "../../../utils/requestSlice";

const Request = () => {
    const request = useSelector((store) => store.request);
    const dispatch = useDispatch();

    const reviewRequest = async (status, _id) => {
        try {
            await axiosInstance.post(`/request/review/${status}/${_id}`, {});
            dispatch(removeRequest(_id));
        } catch (error) {
            console.log(error);
        }
    };

    const fetchRequest = async () => {
        try {
            const res = await axiosInstance.get("/user/requests/received");
            dispatch(addRequest(res.data.data));
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    if (!request) return;
    if (request.length === 0)
        return <h1 className="flex justify-center m-10 font-bold text-2xl text-white">No Request Found!</h1>;

    return (
        <div className="text-center my-10">
            <h1 className="font-bold text-white text-4xl">Requests</h1>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                {request.map((req) => {
                    const { firstName, lastName, photoUrl, _id, age, gender, about } = req.fromUserId;
                    return (
                        <div key={_id} className="p-6 flex flex-col md:flex-row items-center gap-4 border rounded-lg bg-base-300 w-11/12 md:w-1/2 shadow-lg">
                            <img className="w-20 h-20 rounded-full" src={photoUrl} alt="User Photo" />
                            <div className="text-left flex-1">
                                <h2 className="font-bold text-xl">{`${firstName} ${lastName}`}</h2>
                                {age && gender && <p className="text-gray-400">{`${age}, ${gender}`}</p>}
                                <p className="text-gray-300">{about}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="btn btn-primary" onClick={() => reviewRequest("accepted", req._id)}>Accept</button>
                                <button className="btn btn-secondary" onClick={() => reviewRequest("rejected", req._id)}>Reject</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Request;