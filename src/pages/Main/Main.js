import React from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../../context/AuthContext";

function Main() {
  const { user } = useAuth();

  return (
    <div className="main-page" >
      <h1>Welcome to Bookend {user?.email}!</h1>
      <div className="catcher">
      <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="library" />
      <a href="/books">
      <button className="button" style={{
        height: '70px',
        width: '150px',
        fontSize: '20px'
      }}>Enter the library</button>
      </a>
        </div>
      </div>
  );
}
    

export default Main;