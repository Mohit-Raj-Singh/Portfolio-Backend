const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectionDB } = require("./Config/db");
const { projectRouter } = require("./router/ProjectRoute");

const app = express();

app.use(cors({
    origin: "*"
}))
app.use(express.json());
app.use("/", projectRouter)


app.listen(process.env.port, async () => {
    try {
        await connectionDB;
        console.log("Connected to DB");
    }
    catch (err) {
        console.log("Error in Connection");
        console.log(err);
    }
    console.log(`server is running on port ${process.env.port}`);
})