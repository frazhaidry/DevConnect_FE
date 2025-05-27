import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import EditProfile from "./EditProfile";

const ProfilePage = () => {
  const user = useSelector((store) => store.user);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex justify-center items-start px-4 py-10">
      <div className="w-full">
        {isEditing ? (
          <EditProfile user={user} onClose={() => setIsEditing(false)} />
        ) : (
          <ProfileCard user={user} onEdit={() => setIsEditing(true)} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
