import Model from "../models/Model.model.js";

export default class LLMService {

    getAllLLMs = async () => {
        let LLMs
        try {
            LLMs = await Model.find({});
            return LLMs
        } catch (e) {
            throw new Error("Failed to retrieve all model documents")
        }
    }

    getLLMById = async (id) => {
        let LLM;
        try {
            console.log(id)
            LLM = await Model.findById(id)
            return LLM;
        } catch (e) {
            console.log(e.message)
            throw new Error("No LLM matching ID provided")
        }
    }

    updateLLMById = async (req) => {
        const llmId = req.query.id;
        console.log(req.body)
        try {
            const updatedLLM = await Model.findOneAndUpdate(
                { _id: llmId },
                {
                    $set: {
                        type: req.body.type,
                        name: req.body.name,
                        organization: req.body.organization,
                        description: req.body.description,
                        created_date: req.body.created_date,
                        size: req.body.size,
                        size_int: req.body.size_int,
                        modality: req.body.modality,
                        access: req.body.access,
                        license: req.body.license,
                        dependencies: req.body.dependencies
                    }
                },
                { new: true }
            )
            console.log(updatedLLM)
            if (!updatedLLM) {
                throw new Error("LLM not found")
            }
            return updatedLLM;
        } catch (e) {
            if (e.message === "LLM not found") {
                throw new Error(e.message)
            } else {
                console.log(e.message)
                throw new Error("Internal system error")
            }
        }
    }

}