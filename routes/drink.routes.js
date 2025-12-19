import express from "express";
import {addDrink, deleteDrink, getAllDrinks, getDrinkById, updateDrink} from "../controllers/drinks.controller.js";

const router = express.Router();

router.post("/add", addDrink);
router.get("/all", getAllDrinks);
router.get("/find/:id", getDrinkById);
router.put("/update", updateDrink);
router.delete("/remove", deleteDrink);

export default router;