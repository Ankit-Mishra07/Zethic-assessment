import React from "react";
import { Link } from "react-router-dom";
import styles from "../Login/login.module.css";
const Register = ({ setShowRegister, setShowLogin }) => {
  console.log("Login");
  return (
    <div className={styles.modal}>
      <div className={`${styles.modal_content} ${styles.animate}`}>
        <div className={styles.imgcontainer}>
          <span
            onClick={() => setShowLogin(false)}
            className={styles.close}
            title="close login"
          >
            &times;
          </span>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt=""
            className={styles.avatar}
          />
        </div>
        <div className={styles.container}>
          <label htmlFor="email">
            <b>Username</b>
          </label>
          <input
            type="username"
            placeholder="Enter username"
            name="username"
            required
            className={styles.input}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            className={styles.input}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Register
          </button>
        </div>
        <div
          className={styles.container}
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <button
            type="button"
            className={styles.cancelbtn}
            onClick={() => setShowLogin(false)}
          >
            Cancel
          </button>
          <span
            className={styles.password}
            onClick={() => setShowRegister(false)}
          >
            Already have an account
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
