import dotenv from "dotenv";
dotenv.config();

import express from "express";
import db from "./config/db.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import productRoutes from "./routes/productRoutes.mjs";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pinged");
});

await db();

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
