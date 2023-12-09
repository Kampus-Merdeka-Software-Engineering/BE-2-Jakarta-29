import express from "express";
import { PostKritik } from "../controllers/kritik-controller.js";

const router = express.Router();

router.post("/create", PostKritik);

export default router;