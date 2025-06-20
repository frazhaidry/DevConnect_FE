import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../../utils/feedSlice";
import axiosInstance from "../../config/axiosInstance";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

const UserCard = ({ user, isProfile }) => {
  const { firstName, lastName, photoUrl, age, _id, gender, about } = user;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  const handleSendRequest = async (status, userId) => {
    try {
      // Trigger exit animation
      setVisible(false);

      // Delay removal to allow animation
      setTimeout(async () => {
        const res = await axiosInstance.post(`/request/send/${status}/${userId}`, {});
        dispatch(removeUserFromFeed(userId));

        if (status === "interested") {
          toast.success("Request sent successfully!");
        } else {
          toast.info("User ignored.");
        }
      }, 400);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
          className="bg-[#EBE5C2] text-[#504B38] border border-[#E5DFB9] rounded-xl shadow-md p-4 w-full max-w-sm mx-auto"
        >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Profile"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          ) : (
            <div className="w-full h-48 bg-[#B9B28A] flex items-center justify-center rounded-lg mb-4 text-white text-xl">
              No Image
            </div>
          )}
          <h2 className="text-xl font-semibold">{firstName + " " + lastName}</h2>
          {age && gender && <p className="text-sm my-1">{`${age}, ${gender}`}</p>}
          <p className="text-sm mb-4">{about}</p>

          {!isProfile && (
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-[#B9B28A] text-[#504B38] rounded hover:brightness-105"
                onClick={() => handleSendRequest("interested", _id)}
              >
                Interested
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleSendRequest("ignored", _id)}
              >
                Ignore
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
    gender: PropTypes.oneOf(["male", "female", "non-binary", "other", null]),
    about: PropTypes.string,
  }).isRequired,
};

export default UserCard;
