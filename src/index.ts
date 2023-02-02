import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { shippingRoutes } from "./routes/shipping";

dotenv.config({ path: ".env.local" });

const app = express();
app.use(cors());

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("combined"));

shippingRoutes(app);

app.get("/", (req, res) => {
  res.send("Hey, the API is running 🥳");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the Express API
module.exports = app;