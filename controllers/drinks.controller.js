import Drink from "../models/drink.model.js";

export const addDrink = async (req, res) => {
    try {
        const {name, category, price, qty, image_url} = req.body;

        const existingDrink = await Drink.findOne({name: name}).exec();

        if (existingDrink) {
            return res.status(405).json({message: "Drink already exists"});
        }

        const drink = await Drink.create({
            name: name, category: category, price: price, qty: qty, image_url: image_url, is_available: true
        });

        res.status(201).json({
            message: "Drink successfully added", added: drink
        });
    } catch (error) {
        res.send(500).json({message: "Error adding drink", error: error.message});
    }
}

export const getAllDrinks = async (req, res) => {
    try {
        const drinks = await Drink.find();

        if (drinks.length === 0) {
            return res.status(404).json({message: "Drinks not found!"});
        }

        res.status(200).json({
            message: `${drinks.length} ${drinks.length > 1 ? "drinks found!" : "drink found!"}`, drinks: [...drinks]
        });
    } catch (error) {
        res.status(500).json({message: "Failed to fetch drinks", error: error.message});
    }
}

export const getDrinkById = async (req, res) => {
    try {
        const {id} = req.params;

        const drink = await Drink.findById(id).exec();

        if (!drink) {
            return res.status(404).json({message: "Drink not found!"});
        }

        res.status(200).json({
            message: "Drink found!", drink: drink
        });
    } catch (error) {
        res.status(500).json({message: "Error fetching drink", error: error.message});
    }
}

export const updateDrink = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body;

        const updatedDrink = await Drink.findByIdAndUpdate(id, updatedData, {new: true});

        if (!updatedDrink) {
            return res.status(404).json({message: "Drink not found"});
        }

        res.status(200).json({
            message: "Drink updated successfully!", drink: updatedDrink
        });
    } catch (error) {
        res.status(500).json({message: "Error fetching or updating drink", error: error.message});
    }
}

export const deleteDrink = async (req, res) => {
    try {
        const {id} = req.params;

        const removedDrink = await Drink.findByIdAndDelete(id);

        if (!removedDrink) {
            return res.status(404).json({message: "Drink not found!"});
        }

        res.status(200).json({
            message: "Drink removed successfully!", removed: removedDrink
        })
    } catch (error) {
        res.status(500).json({message: "Error fetching or removing drink", error: error.message});
    }
}