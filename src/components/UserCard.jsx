import PropTypes from "prop-types";

const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, age, gender, about} = user;
    console.log(user);
  return (
    <>
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="Profile picture" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + "" + lastName}</h2>
   {age && gender && <p>{age + "," + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-end mt-10">
      <button className="btn btn-primary">Interested</button>
      <button className="btn bg-red-800">Iqnored</button>
    </div>
  </div>
</div>
    </>
  )
}
UserCard.propTypes = {
    user: PropTypes.string.isRequired
  }


export default UserCard