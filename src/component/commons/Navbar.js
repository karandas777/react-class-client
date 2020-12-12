import React from "react";
import {
  BiBoltCircle,
  BiUser,
  BiCog,
  BiHomeAlt,
  BiMenu,
  BiUserPlus,
  BiListPlus,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-grad">
      <Link className="h5 mb-0 text-decoration-none text-light logo" to="/">
        React
        <BiBoltCircle className="mb-1 custom-margin" />
        Class
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {props.Home ? (
            <Link className="nav-link text-light" to="/">
              <BiHomeAlt className="mb-1" /> Home
            </Link>
          ) : null}
          {props.Students ? (
            <Link className="nav-link text-light" to="/students">
              <BiUser className="mb-1" /> Students
            </Link>
          ) : null}
          {props.AddStudent ? (
            <Link className="nav-link text-light" to="/add-student">
              <BiUserPlus className="mb-1" /> Add Student
            </Link>
          ) : null}
          {props.Staff ? (
            <Link className="nav-link text-light" to="/staff">
              <BiMenu className="mb-1" /> Staff
            </Link>
          ) : null}
          {props.AddStaff ? (
            <Link className="nav-link text-light" to="/add-staff">
              <BiListPlus className="mb-1" /> Add Staff
            </Link>
          ) : null}
          {props.Settings ? (
            <Link className="nav-link text-light" to="/settings">
              <BiCog className="mb-1" /> Settings
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
