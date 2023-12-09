import express from "express";
import { getSelfItems, getSocietyItems, getRelationItems } from "../controllers/news-controller.js";


const router = express.Router();

router.get("/self", getSelfItems);
router.get("/society", getSocietyItems);
router.get("/relationship", getRelationItems);

export default router;