import Burger from "../models/burger.model.js";

export const addBurger = async (req, res) => {
    try {
        const {name, category, ingredients, price, qty, image_url} = req.body;

        const existingBurger = await Burger.findOne({name: name}).exec();

        if (existingBurger) {
            return res.status(405).json({message: "Burger already exists"});
        }

        const burger = await Burger.create({
            name: name, category: category, price: price, qty: qty, image_url: image_url, is_available: true,
        });

        res.status(201).json({
            message: "Burger successfully added!", added: burger
        });
    } catch (error) {
        res.status(500).json({message: "Failed to add burger", error: error.message});
    }
}

export const getAllBurgers = async (req, res) => {
    try {
        const burgers = await Burger.find();

        if (burgers.length === 0) {
            return res.status(404).json({message: "Burgers not found!"});
        }

        res.status(200).json({
            message: `${burgers.length} ${(burgers.length > 1 ? "burgers found!" : "burger found!")}`,
            burgers: [...burgers]
        });
    } catch (error) {
        res.status(500).json({message: "Failed to fetch burgers", error: error.message});
    }
}

export const getBurgerById = async (req, res) => {
    try {
        const {id} = req.params;

        const burger = await Burger.findById(id).exec();

        if (!burger) {
            return res.status(404).json({message: "Burger not found!"});
        }

        res.status(200).json({
            message: "Burger found!", burger: burger
        });
    } catch (error) {
        res.status(500).json({message: "Error fetching burger", error: error.message});
    }
}

export const updateBurger = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body;

        const updatedBurger = await Burger.findByIdAndUpdate(id, updatedData, {new: true, runValidators: true});

        if (!updatedBurger) {
            return res.status(404).json({message: "Burger not found!"});
        }

        res.status(200).json({
            message: "Burger updated successfully", burger: updatedBurger
        });
    } catch (error) {
        res.status(500).json({message: "Error fetching or updating burger", error: error.message});
    }
}

export const deleteBurger = async (req, res) => {
    try {
        const {id} = req.params;

        const removedBurger = await Burger.findByIdAndDelete(id);

        if (!removedBurger) {
            return res.status(404).json({message: "Burger not found!"});
        }

        res.status(200).json({message: "Burger removed successfully!", removed: removedBurger});
    } catch (error) {
        res.status(500).json({message: "Error fetching or removing burger", error: error.message});
    }
}