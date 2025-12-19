import express from "express";
import {
    addBurger,
    deleteBurger,
    getAllBurgers,
    getBurgerById,
    updateBurger
} from "../controllers/burgers.Controller.js";

const router = express.Router();

router.post("/add", addBurger);
router.get("/all", getAllBurgers);
router.get("/find/:id", getBurgerById);
router.put("/update/:id", updateBurger);
router.delete("/remove/:id", deleteBurger);

export default router;