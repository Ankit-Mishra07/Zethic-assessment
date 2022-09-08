import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/product", productRouter);
export default app;
