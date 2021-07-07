const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = Schema({
    username: {
        type: String,
        required: "Username is required.",
        unique: "Username already taken"
    },
    name: {
        type: String,
        required: "Username is required."
    }, 
    email: {
        type: String,
        required: [true, "Email is required"],
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    
    },
    password: {
        type: String,
        required: "Password is required"
    },
    profileImgUrl: {
        type: String
    },
    bio: {
        type: String,
        required: "Username is required."
    },
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    notification: [{
        type: String,
    }]
},{timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = { User }