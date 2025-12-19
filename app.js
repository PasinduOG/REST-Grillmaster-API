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
