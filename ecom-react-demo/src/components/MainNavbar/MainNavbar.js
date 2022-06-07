import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavBar from "../../UI/NavBar/Navbar";

const MainNavbar = () => {
  const isLoggedIn = false;

  return (
    <NavBar>
      <ul>
        <li>Welcome {}!</li>
      </ul>
    </NavBar>
  );
};

export default MainNavbar; 
