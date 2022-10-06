import express from "express";
import cors from "cors";
import { router } from "./src/routes/index.js";

export const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use("/", router)
