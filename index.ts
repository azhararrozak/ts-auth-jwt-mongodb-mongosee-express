import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");
import helmet from "helmet";
import { errorHandler } from "./src/middleware/error.middleware";
import authRoutes from "./src/routes/auth.routes";
import userRoute from "./src/routes/user.routes";

dotenv.config();

interface UserBasicInfo {
  _id: unknown;
  username: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserBasicInfo | null;
    }
  }
}

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

const uri: string =
  process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the database");
  } catch (error) {
    console.error(error);
  }
})();

app.use(authRoutes)
app.use(userRoute);

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("Server is running");
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
