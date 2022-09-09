import React from "react";
import styles from "./card.module.css";
const Card = ({ elem }) => {
  return (
    <div className={styles.card__box}>
      <div className={styles.img_box}>
        <img src={elem.img[0]} alt="" />
      </div>
      <div className={styles.product_title}>{elem.title.substring(0, 30)}</div>
      <div className={styles.price}>Rs. {elem.price}₹</div>

      <div className={styles.btn_box}>
        <button>Add to Cart</button>
        <div className={styles.rating}>
          {elem.rating} <span>★</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
