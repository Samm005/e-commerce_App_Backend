import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

import db from "./config/db.mjs";

app.use(express.json());

db();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});