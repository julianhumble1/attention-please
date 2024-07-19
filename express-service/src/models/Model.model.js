import mongoose from "mongoose";

const llmSchema = new mongoose.Schema({
    type: { type: String },
    name: { type: String },
    organization: { type: String },
    description: { type: String },
    created_date: { type: Date },
    size: { type: String },
    size_int: { type: Number},
    modality: { type: String },
    access: { type: String },
    license: { type: String },
    dependencies: { type: String }
});

const Model = new mongoose.model("Model", llmSchema, "models");

export default Model;