import express from "express";
import { config } from "dotenv";
import cors from "cors";

config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.use(cors());
app.use(express.json());