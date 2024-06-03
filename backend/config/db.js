import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('url/food-del').then(()=>console.log("DataBase Connected"));
}