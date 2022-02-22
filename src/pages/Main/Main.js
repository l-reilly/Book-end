import React from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../../context/AuthContext";

function Main() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Welcome to Book End {user?.email}!</h1>
      <h2>Featured Books</h2>
      <div className="catcher">
        <h2>The Catcher in the Rye</h2>
        <img src="https://bizweb.dktcdn.net/100/326/228/products/thecatcherintheryejdsalinger.jpg?v=1546509944720" alt="book cover"/>
        <Link to ="/books/6210bc5441ffdf9b060151eb">Check it out!</Link>
        <Link to="/books">See all books</Link>
      </div>
    </div>
  );
}
    

export default Main;