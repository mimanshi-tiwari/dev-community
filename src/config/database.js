const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://tiwarimimanshi_db_user:vSLLHvnztZgmkdo5@cluster0.escto0j.mongodb.net/devcommunity");
}

module.exports = connectDB;

