const express = require("express");
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")

app.post("/signup", async (req, res) => {
     const newUser = {
        firstName: "Mimanshi",
        lastName: "Tiwari",
        gender: "female",
        age: 32,
        email: "mimanshi.tiwari@gmail.com",
        password: "Mimanshi@123"
     }

     const user = new User(newUser)

     try {
        await user.save()
        res.send("User added successfully!!")
     }catch(err) {
        res.status(400).send("Signup failed" + err.message)
     }

});

connectDB().then(() => {
    console.log("devcommunity DB connection stablished successfully!!")
    app.listen(3000, () => {
    console.log("Server running on port 3000!!");
})
}).catch((err) => {
    console.error("devcommunity DB connection failed!!", err);
})

