import express from "express";
import bodyParser from "body-parser";

import "./model/kritik-model.js";
import { startSequelize } from "./startSequelize.js";

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

startSequelize();

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})