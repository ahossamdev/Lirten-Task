import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import addcustomerBtn from "../../Pics/vector.png";
import straightLine from "../../Pics/vector8.png";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addcustomer");
  };
  return (
    <>
      <div className={classes.headerContainer}></div>
      <p className={classes.customersText}>Customers</p>
      <svg
        className={classes.victor7}
        width="417"
        height="66"
        viewBox="0 0 421 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 34.2301H240.682L248.887 2L258.345 68L267.119 34.2301H419"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <img
        onClick={() => handleClick()}
        className={classes.addcustomerBtn}
        src={addcustomerBtn}
        alt="addcustomerBtn"
      />
      <p className={classes.addCustomerText}>ADD NEW CUSTOMER</p>
      <img className={classes.straightLine} src={straightLine} alt="vector" />
    </>
  );
};

export default Header;
