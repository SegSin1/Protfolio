import React from "react";
import NavBar from "../UI/NavBar/Navbar";
import Input from "../UI/Input/Input";
import classes from "./MainNavbar.module.css";
import Avatar from "../UI/Avatar/Avatar";
import userImg from "../../assets/tyler.jpg";
import CartBtn from "../Cart/CartBtn";
import StoreNotificationBtn from "../StoreNotifications/StoreNotificationBtn";
import { GiMusicSpell } from "react-icons/gi";

const MainNavbar = () => {
  const isLoggedIn = false;

  return (
    <NavBar>
      <ul className={classes["nav-items"]}>
        <li
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
        <li>
          <Input type={"text"} id={"nav-search"} iconType="search" />
        </li>
        <li>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li>
              <Avatar
                className="big"
                isHeader={true}
                imgSrc={userImg}
                text={"S"}
              />
            </li>
            <li>Welcome {"Segev"}!</li>
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
