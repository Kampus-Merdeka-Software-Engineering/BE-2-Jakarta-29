import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import newsRoutes from "./routes/news-routes.js";
import kritikRoutes from "./routes/kritik-routes.js";

import './model/index.js';
import { startSequelize } from "./utils/startSequelize.js";



const app = express()
app.use(cors())
const port = process.env.PORT
dotenv.config()


startSequelize();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw())


app.use(bodyParser.json())

app.use("/news", newsRoutes)
app.use("/kritik", kritikRoutes)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})