import Side from "../models/side.model.js";

export const addSide = async (req, res) => {
    try {
        const { name, category, price, qty, image_url } = req.body;

        const existingSide = await Side.findOne({ name: name }).exec();

        if (existingSide) {
            return res.status(405).json({ message: "Side already exists!" });
        }

        const side = await Side.create({
            name: name,
            category: category,
            price: price,
            qty: qty,
            image_url: image_url,
            is_available: true
        });

        res.status(201).json({
            message: "Side added successfully",
            added: side
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to add side", error: error.message });
    }
}

export const getAllSides = async (req, res) => {
    try {
        const sides = await Side.find();

        if (sides.length === 0) {
            return res.status(404).json({ message: "Sides not found!" });
        }

        res.status(200).json({
            message: `${sides.length} ${sides.length > 1 ? "sides found!" : "side found!"}`,
            sides: [...sides]
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch sides", error: error.message });
    }
}

export const getSideById = async (req, res) => {
    try {
        const { id } = req.params;

        const side = await Side.findById(id).exec();

        if (!side) {
            return res.status(404).json({ message: "Side not found!" });
        }

        res.status(200).json({
            message: "Side found!",
            side: side
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching side", error: error.message });
    }
}

export const updateSide = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedSide = await Side.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedSide) {
            return res.status(404).json({ message: "Side not found!" });
        }

        res.status(200).json({
            message: "side updated successfully!",
            updated: updateSide
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching or updating side", error: error.message });
    }
}

export const deleteSide = async (req, res) => {
    try {
        const { id } = req.params;

        const removedSide = await Side.findByIdAndDelete(id);

        if (!removedSide) {
            return res.status(404).json({ message: "Side not found!" });
        }

        res.status(200).json({
            message: "Side removed successfully!",
            removed: removedSide
        })

        res.status(200).json()
    } catch (error) {
        res.status(500).json({ message: "Error fetching or removing side", error: error.message });
    }
}