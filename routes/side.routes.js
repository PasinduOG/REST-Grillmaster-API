import express from "express";
import {addSide, deleteSide, getAllSides, getSideById, updateSide} from "../controllers/sides.controller.js";
const router = express.Router();

router.post("/add", addSide);
router.get("/all", getAllSides);
router.get("/find/:id", getSideById);
router.put("/update/:id", updateSide);
router.delete("/remove/:id", deleteSide);

export default router;