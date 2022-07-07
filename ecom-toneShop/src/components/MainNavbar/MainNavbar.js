import React from "react";
import NavBar from "../UI/NavBar/Navbar";
import Input from "../UI/Input/Input";
import classes from "./MainNavbar.module.css";
import Avatar from "../UI/Avatar/Avatar";
import userImg from "../../assets/Segev.jpg";
import CartBtn from "../Cart/CartBtn";
import StoreNotificationBtn from "../StoreNotifications/StoreNotificationBtn";
import { GiMusicSpell } from "react-icons/gi";
import { useNavigate } from 'react-router-dom'


const MainNavbar = () => {
  const isLoggedIn = false;
  const navigate = useNavigate();
  const logoClickHandler = () => {
    navigate('/')
  }
  return (
    <NavBar>
      <ul className={classes["nav-items"]}>
        <li
          onClick={logoClickHandler}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GiMusicSpell size={25} />{" "}
          <span style={{ fontSize: "1.5rem", marginLeft: "5px" }}>
            ToneWars
          </span>
        </li>
        <li className={classes["nav-search"]}>
          <Input type={"text"} id={"nav-search"} iconType="search" />
        </li>
        <li>SELL</li>
        <li>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li className={classes["user-details"]}>
              <Avatar
                className="big"
                iconColor=""
                isHeader={true}
                imgSrc={userImg}
                text={"S"}
              />
            </li>
            <li className={classes["user-details"]}>Welcome {"Segev"}!</li>
            <li>
              <StoreNotificationBtn />
            </li>
            <li>
              <CartBtn />
            </li>
          </ul>
        </li>
      </ul>
    </NavBar>
  );
};

export default MainNavbar;
