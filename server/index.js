const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

require('./db/connection');
const User = require('./Models/User');

// POST method:
app.post("/userdatas", async(req, res) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send("Error saving user information");
    }
});

// GET method:
app.get("/userdatas", async(req, res) => {
    try {
        const users = await User.find(); 
        res.send(users);
    } catch (error) {
        res.status(500).send("Error fetching user details");
    }
});

app.listen(5000);
