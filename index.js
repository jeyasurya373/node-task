const express = require("express");

const app = express();

const Postroute = require("./routes/post")

app.use(express.json());

app.use((req, res, next) => {
    console.log("done")
    next();
})

app.use("/", Postroute)

app.listen(3001, () => {
    console.log("everything fine")
})