import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const margin = { margin: "0 10px" };

function Navbar() {
  const { user, handleLogout } = useAuth();

  if (user) {
    return (
      <div className="nav-loggedin">
        <Link style={margin} to="/">
          Home
        </Link>
        <Link style={margin} to="/books">
          Books
        </Link>
        <Link style={margin} to="/new-book">
          Add a Book
        </Link>
        <Link style={margin} to ="/user-profile">
          Profile
        </Link>
        <button style={margin} onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link to="/login">Login</Link>
      <Link style={{ marginLeft: "15px" }} to="/signup">
        Signup
      </Link>
    </div>
  );
}

export default Navbar;
