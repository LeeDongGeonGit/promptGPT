import express from "express";
import {getActivePrompt, postPrompt} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/", getActivePrompt);
router.post("/", postPrompt);

export default router;