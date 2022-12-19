import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">SignUp</Link>
        {user ? <button onClick={handleSignOut}>Sign Out</button> : <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Header;
