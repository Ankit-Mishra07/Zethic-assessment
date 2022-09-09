import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../Login/Login";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [showLogin, setShowLogin] = useState();
  const { cart } = useSelector((state) => state.cartState);
  console.log("cart", cart);
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
              <sup>{cart.length > 0 ? cart.length : 0}</sup>
            </Link>
          </span>
          <button onClick={() => setShowLogin(true)}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
