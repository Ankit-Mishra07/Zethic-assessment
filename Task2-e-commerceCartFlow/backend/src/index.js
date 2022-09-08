import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);
export default app;
