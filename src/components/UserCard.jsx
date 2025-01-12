import PropTypes from "prop-types";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, age, _id ,gender, about} = user;
    const dispatch = useDispatch();
    console.log(user);

    const handleSendRequest = async (status, _id) => {
        try {
            const res = await axios.post(`${BASE_URL}/request/send/${status}/${_id}`, {}, {withCredentials: true})
            dispatch(removeUserFromFeed(_id));
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="Profile picture" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
   {age && gender && <p>{age + "," + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-end mt-10">
      <button className="btn btn-primary" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
      <button className="btn bg-red-800" onClick={() => handleSendRequest("ignored",_id)}>Iqnored</button>
    </div>
  </div>
</div>
    </>
  )
}

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

export default UserCard