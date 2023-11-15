const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require('dotenv').config();

// console.log(process.env.DB_USER, process.env.DB_PASS, process.env.TOKEN_SECRET);

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ msg: "Boss is online..." });
})

app.listen(port, () => {
    console.log(`Boss is online in port ${port}`);
})