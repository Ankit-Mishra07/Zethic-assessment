import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cartRouter from "./routes/cartRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);
app.use("/api/cart", cartRouter);
export default app;
