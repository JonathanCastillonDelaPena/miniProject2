import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to={"/home"}>
          <i className="fa fa-home">Home</i>
        </Link>
        <Link to={"/shop"}>
          <i className="fa fa-home">Shop</i>
        </Link>
        <Link to={"/contact"}>
          <i className="fa fa-home">Contact Us</i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
