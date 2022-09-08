import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/products.controller.js";

const productRouter = Router();

productRouter.route("/allproducts").get(getAllProducts);
productRouter.route("/createproduct").post(createProduct);

export default productRouter;
