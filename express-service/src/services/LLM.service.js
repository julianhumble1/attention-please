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

}