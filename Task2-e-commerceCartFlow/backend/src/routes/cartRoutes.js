import { Router } from "express";
import {
  buyNowCart,
  createCartProduct,
  deleteCart,
  getCartProducts,
} from "../controllers/cart.controller.js";

import protect from "../middlewares/authMiddleware.js";

const cartRouter = Router();

cartRouter.route("/getcart/:id").get(protect, getCartProducts);
cartRouter.route("/createcart").post(protect, createCartProduct);
cartRouter.route("/delete/:id").delete(protect, deleteCart);
cartRouter.route("/order/:id").delete(protect, buyNowCart);
export default cartRouter;
