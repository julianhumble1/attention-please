import LLMService from "../services/LLM.service.js";

export default class LLMController {

    #service;

    constructor(service = new LLMService()) {
        this.#service = service
    }

    getAllLLMs = async (req, res) => {
        let response;
        try {
            response = await this.#service.getAllLLMs()
            res.status(200).json(response)
        } catch (e) {
            res.status(404).json({error: e.message})
        }
    }
}