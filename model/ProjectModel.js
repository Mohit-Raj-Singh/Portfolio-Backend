const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    title: String,
    desc: String,
    image: String,
    techstack: Array,
    liveLink: String,
    repoLink: String,
})

const ProjectModel = mongoose.model("project", ProjectSchema);

module.exports = { ProjectModel }

