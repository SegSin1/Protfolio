import React from "react";
import classes from "./Navbar.module.css";

const MainNavbar = ({ children }) => {
  return <nav className={classes["main-nav-container"]}>{children}</nav>;
};

export default MainNavbar;
