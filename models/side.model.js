import mongoose, {Schema} from "mongoose";

const sideSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: [0, "Price will be greater than at least 0"],
        required: true
    },
    qty: {
        type: Number,
        min: [0, "Qty cannot be empty"],
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    is_available: Boolean
},{
    timestamps: true
});

const Side = mongoose.model("Side", sideSchema);
export default Side;