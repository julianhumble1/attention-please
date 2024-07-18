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

}