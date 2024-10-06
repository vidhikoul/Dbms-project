import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,  // Ensure this matches your frontend URL exactly
    methods: ["GET", "POST", "PUT", "DELETE"],  // Add other methods as needed
    credentials: true,  // Allow sending cookies or auth headers with the request
  })
);

// Handle preflight requests
app.options("/api/v1/reservation", cors());  // Allow OPTIONS request for CORS


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;