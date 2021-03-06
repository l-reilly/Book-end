import React from "react";
import { useAuth } from "../../../src/context/AuthContext";
import { Favorites } from "../Favorites"

function UserProfile() {
  const { user } = useAuth();
  
  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <p>Email: {user?.email}</p>
      <h3>Favorite Books:</h3>
      <Favorites />
    </div>
  );
}

export default UserProfile;
