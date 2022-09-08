import app from "./index.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`server is listening on port ${PORT}`);
});
