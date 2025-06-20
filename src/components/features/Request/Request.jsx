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

  if (!request) return null;

  if (request.length === 0)
    return (
      <h1 className="flex justify-center m-10 font-bold text-2xl text-[#504B38]">
        No Request Found!
      </h1>
    );

  return (
    <div className="bg-[#F8F3D9] min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-[#504B38] mb-10">
        📨 Connection Requests
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {request.map((req) => {
          const { firstName, lastName, photoUrl, _id, age, gender, about } =
            req.fromUserId;

          return (
            <div
              key={_id}
              className="bg-[#EBE5C2]/90 border border-[#E5DFB9] rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.1)] p-6 flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <img
                className="w-20 h-20 rounded-full border-4 border-[#B9B28A] shadow"
                src={photoUrl}
                alt="User"
              />
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-semibold text-[#504B38]">
                  {firstName} {lastName}
                </h2>
                {age && gender && (
                  <p className="text-sm text-[#504B38]/70 mt-1">
                    {age}, {gender}
                  </p>
                )}
                {about && (
                  <p className="text-sm text-[#504B38] mt-2">{about}</p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => reviewRequest("accepted", req._id)}
                  className="bg-[#B9B28A] text-[#504B38] px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#a8a072] transition"
                >
                  Accept
                </button>
                <button
                  onClick={() => reviewRequest("rejected", req._id)}
                  className="bg-red-300 text-red-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-400 transition"
                >
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Request;
