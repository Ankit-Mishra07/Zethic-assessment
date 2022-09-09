import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../Login/Login";
import { BsFillBagFill } from "react-icons/bs";
const Navbar = () => {
  const [showLogin, setShowLogin] = useState();
  return (
    <>
      {showLogin === true && (
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
      <div className={styles.navbar}>
        <Link to={"/"} className={styles.link}>
          <div className={styles.logoText}>Z shop</div>
        </Link>

        <div className={styles.inputBox}>
          <input type="text" placeholder="search..." value={"helo"} />
          <Link to={"/"} className={styles.link}>
            All Products
          </Link>
        </div>

        <div className={styles.buttonBox}>
          <span>
            <Link to={"/"} className={styles.link}>
              <BsFillBagFill />
              <sup>0</sup>
            </Link>
          </span>
          <button onClick={() => setShowLogin(true)}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
