import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    sessionID : {
        type : String
    },
    role : {
        type : String,
        enum : ['NORMAL' , 'ADMIN'],
        default : 'NORMAL'
    }
}, {timestamps : true});

const User = mongoose.model("User" , userSchema);

export default User;