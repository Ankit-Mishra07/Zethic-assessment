import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/products.controller.js";
import protect from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.route("/allproducts").get(getAllProducts);
productRouter.route("/createproduct").post(protect, createProduct);

export default productRouter;
