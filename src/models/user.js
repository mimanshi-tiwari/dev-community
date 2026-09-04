const mongoose = require("mongoose");

const { Schema, model } = mongoose

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    }
})

const User = model("User", userSchema)

module.exports = User;
