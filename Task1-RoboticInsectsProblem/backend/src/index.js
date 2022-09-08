import express from "express";
import cors from "cors";
import router from "./routes/insectNavigate.route.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
// Exporting app from here to use in server.js
export default app;
