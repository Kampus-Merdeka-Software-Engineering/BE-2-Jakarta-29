import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import articleRoutes from "./routes/article-routes.js";

import "./model/kritik-model.js";
import { startSequelize } from "./startSequelize.js";

const app = express()
const port = 4000

startSequelize();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static("views"))
app.use(cors())
app.use(bodyParser.json())

app.use("/home", articleRoutes)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})