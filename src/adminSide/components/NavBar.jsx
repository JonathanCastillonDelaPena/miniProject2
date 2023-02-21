import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to={"/home"}>
          <i className="fa fa-home">Temporary Client Side</i>
        </Link>
        <Link to={"/admin"}>
          <i className="fa fa-home">Dashboard</i>
        </Link>
        <Link to={"/admin/customer"}>
          <i className="fa fa-home">Customer Info</i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
