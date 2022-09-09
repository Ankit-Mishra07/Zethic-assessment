import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import Loading from "../../components/Loading/Loading";
import { getCartProductsAction } from "../../redux/cart/action";
import { getCookie } from "../../utils/cookies";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, isCartLoading, isCartError, total } = useSelector(
    (state) => state.cartState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (getCookie("token")) {
      dispatch(getCartProductsAction());
    }
  }, [dispatch]);

  const handleBuyNow = (id) => {};

  return (
    <>
      {isCartLoading ? (
        <Loading />
      ) : (
        <div className={styles.main__cartBox}>
          {cart.length > 0 &&
            cart.map((elem) => (
              <div key={elem._id} style={{ width: "100%" }}>
                <CartCard elem={elem} />
              </div>
            ))}

          <div className={styles.total_buy_box}>
            <span>Total Price: {total}₹</span>
            <button className={styles.buynow} onClick={() => handleBuyNow()}>
              Buy Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
