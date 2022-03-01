import React from "react";
import { useAuth } from "../../../src/context/AuthContext";


function UserProfile() {
  const { user } = useAuth();
  
  return (
    <div>
      <h2>Your Profile</h2>
      <p>Email: {user?.email}</p>
      <h3>Liked Books:</h3>
      <ul>
      </ul>
    </div>
  );
}

export default UserProfile;
