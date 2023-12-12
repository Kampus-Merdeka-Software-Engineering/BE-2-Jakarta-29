import express from "express";
import { getSelfItems, getSocietyItems, getRelationItems, getIndividualItems, getRandomItems } from "../controllers/news-controller.js";


const router = express.Router();

router.get("/self", getSelfItems);
router.get("/society", getSocietyItems);
router.get("/relationship", getRelationItems);
router.get("/article", getIndividualItems)
router.get("/random", getRandomItems);
export default router;