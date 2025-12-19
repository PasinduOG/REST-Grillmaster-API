import Burger from "../models/burger.model.js";
import Side from "../models/side.model.js";
import Drink from "../models/drink.model.js";

export const getAllItems = async (req, res) => {
    try {
        const burgers = await Burger.find();
        const sides = await Side.find();
        const drinks = await Drink.find();

        if(burgers.length === 0 || sides.length === 0 || drinks.length === 0) {
            return res.status(404).json({message: "Items not found!"});
        }

        const itemsArray = [...burgers, ...sides, ...drinks];

        const itemsCount = burgers.length + sides.length + drinks.length;

        res.status(200).json({
            message: `${itemsCount} ${itemsCount > 1 ? "items found!" : "item found!"}`,
            items: [...itemsArray]
        });
    } catch (error) {
        res.status(500).json({message: "Failed to fetch items", error: error.message});
    }
}