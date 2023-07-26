const express = require("express");
const { ProjectModel } = require("../model/ProjectModel");
const projectRouter = express.Router();

projectRouter.get("/get", async (req, res) => {
    try {
        const data = await ProjectModel.find();
        res.send(data);
    }
    catch (err) {
        console.log(err);
    }
})

projectRouter.post("/post", async (req, res) => {
    const payload = req.body;
    try {
        const newData = new ProjectModel(payload);
        await newData.save();
        res.send("Added to Database");
    }
    catch (err) {
        console.log(err);
    }
});

projectRouter.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteData = await ProjectModel.findByIdAndDelete(id);
        if (deleteData) {
            res.send("Data Deleted");
        }
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = { projectRouter };