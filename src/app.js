require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const router = require("./routers/shortlink");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://shortlink-amia.up.railway.app",
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
