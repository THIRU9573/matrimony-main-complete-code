const express = require("express");
const cors = require("cors")

const app  = express();

app.use(express.json());
app.use(cors());

require('./db/connection');
const User = require('./Models/User');


app.post("/", async(req, res) => {
    let user = new User(req.body)
    let result = await user.save()
    res.send(result);
})

app.listen(5000)