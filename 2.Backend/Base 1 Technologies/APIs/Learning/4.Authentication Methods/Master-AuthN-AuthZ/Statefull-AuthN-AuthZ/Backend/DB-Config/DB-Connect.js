import mongoose from "mongoose";

const DB_URL = 'mongodb://127.0.0.1:27017/stateful-auth';

export const connectingDB = () => {
    mongoose.connect(DB_URL)
        .then(() => {
            console.log("Connecting to DB ...");
        })
        .catch((error) => {
            console.log("Error Connecting to DB !!!" , error);
        })
}