import express from "express";
import { getArticle } from "../controllers/article-controllers.js";

const router = express.Router();

router.get("/article", getArticle);

export default router;