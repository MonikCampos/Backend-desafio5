import mongoose from "mongoose";
const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    products: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: "products",
                required: true, 
                unique: true
            },
            quantity: {type: Number, default: 1}
        },
    ],
});

export const cartsModel = mongoose.model(
    cartsCollection, 
    cartsSchema
);