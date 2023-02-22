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
          <i className="fa fa-shop">Shop</i>
        </Link>
        <Link to={"/contact"}>
          <i className="fa fa-contact-card">Contact Us</i>
        </Link>
        <Link to={"/admin"}>
          <i className="fa fa-home">Temporary Admin Side</i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
