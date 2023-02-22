import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-center">
        <Link to={"/home"}>
          <i className="fa fa-home fa-3x mx-4"></i>
        </Link>
        <Link to={"/shop"}>
          <i className="fa fa-shop fa-3x mx-4"></i>
        </Link>
        <Link to={"/contact"}>
          <i className="fa fa-contact-card fa-3x mx-4"></i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
