import express from "express";
import cors from "cors";
import connectDB from "./config/mongoose.js";
import {configDotenv} from "dotenv";
import burgerRoutes from "./routes/burger.routes.js";
import drinkRoutes from "./routes/drink.routes.js";
import sideRoutes from "./routes/side.routes.js";
import allItemRoutes from "./routes/allItem.routes.js";

const app = express();
configDotenv();

const allowedOrigin = {
    origin: [
        process.env.ALLOWED_ORIGIN,
        "http://127.0.0.1:5500"
    ],
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(allowedOrigin));

app.use("/item", allItemRoutes);
app.use("/item/burger", burgerRoutes);
app.use("/item/drink", drinkRoutes);
app.use("/item/side", sideRoutes);

app.get("/", (req, res) => {
    res.send(`
        <h1><b>API Endpoints for GrillMaster POS</b></h1>
        <p>Open Source API dev by Pasindu</p><br/>
        <p><b>GET (All Items)</b> - https://rest-grillmaster-api.vercel.app/item/all</p><br/>
        
        <p><b>GET (All Burgers)</b> - https://rest-grillmaster-api.vercel.app/item/burger/all</p>
        <p><b>GET (Search Burger by ID)</b> - https://rest-grillmaster-api.vercel.app/item/burger/find/:id</p>
        <p><b>POST (Add Burger)</b> - https://rest-grillmaster-api.vercel.app/item/burger/add</p>
        <p><b>PUT (Update Burger)</b> - https://rest-grillmaster-api.vercel.app/item/burger/update/:id</p>
        <p><b>DELETE (Remove Burger)</b> - https://rest-grillmaster-api.vercel.app/item/burger/remove/:id</p><br/>

        <p><b>GET (All Drinks)</b> - https://rest-grillmaster-api.vercel.app/item/drink/all</p>
        <p><b>GET (Search Drink by ID)</b> - https://rest-grillmaster-api.vercel.app/item/drink/find/:id</p>
        <p><b>POST (Add Drink)</b> - https://rest-grillmaster-api.vercel.app/item/drink/add</p>
        <p><b>PUT (Update Drink)</b> - https://rest-grillmaster-api.vercel.app/item/drink/update/:id</p>
        <p><b>DELETE (Remove Drink)</b> - https://rest-grillmaster-api.vercel.app/item/drink/remove/:id</p><br/>

        <p><b>GET (All Sides)</b> - https://rest-grillmaster-api.vercel.app/item/side/all</p>
        <p><b>GET (Search Side by ID)</b> - https://rest-grillmaster-api.vercel.app/item/side/find/:id</p>
        <p><b>POST (Add Side)</b> - https://rest-grillmaster-api.vercel.app/item/side/add</p>
        <p><b>PUT (Update Side)</b> - https://rest-grillmaster-api.vercel.app/item/side/update/:id</p>
        <p><b>DELETE (Remove Side)</b> - https://rest-grillmaster-api.vercel.app/item/side/remove/:id</p><br/>
        `);
});

const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server listening to http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server: "+ error);
        process.exit(1);
    }
}

await startServer();
