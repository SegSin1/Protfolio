import React from "react";
import NavBar from "../UI/NavBar/Navbar";
import Input from "../UI/Input/Input";
import classes from "./MainNavbar.module.css";
import Avatar from "../UI/Avatar/Avatar";
import userImg from "../../assets/Segev.jpg";
import CartBtn from "../Cart/CartBtn";
import StoreNotificationBtn from "../StoreNotifications/StoreNotificationBtn";
import StoreWatchListBtn from '../WatchList/StoreWatchListBtn';
import { GiMusicSpell } from "react-icons/gi";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchActions, searchState } from '../../store/slices/search-slice'


const MainNavbar = () => {
  const isLoggedIn = false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isInSellMode, setIsInSaleMode] = useState(false)
  const search = useSelector(searchState)
  const goToShopClickHandler = () => {
    setIsInSaleMode(false)
    navigate('/')
  }
  const sellOrBuyClickHandler = () => {
    setIsInSaleMode(!isInSellMode)
    if (isInSellMode)
      navigate('/')
    else
      navigate('/addItem')
  }
  return (
    <NavBar>
      <ul className={classes["nav-items"]}>
        <li
          onClick={goToShopClickHandler}
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
          <Input
            value={search.searchValue}
            type={"search"}
            id={"nav-search"}
            iconType="search"
            placeholder={'Search anything...'}
            dispatchActions={(val) => dispatch(searchActions.setSearchValue(val))}
            changeHandler={goToShopClickHandler}
          />
        </li>
        <li onClick={sellOrBuyClickHandler}>{isInSellMode ? 'BUY' : 'SELL'}</li>
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
              <StoreWatchListBtn />
            </li>
            <li>
              <CartBtn setIsInSaleMode={setIsInSaleMode} />
            </li>
          </ul>
        </li>
      </ul>
    </NavBar>
  );
};

export default MainNavbar;
