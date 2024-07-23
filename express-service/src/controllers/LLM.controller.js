import ModelValidator from "../middleware/ModelValidator.js";
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

    getLLMById = async (req, res) => {
        let response;
        try {
            response = await this.#service.getLLMById(req.query.id)
            return res.status(200).json(response)
        } catch (e) {
            return res.status(503).json(e.message)
        }
    }

    updateLLMById = async (req, res) => {
        const sentResponse = ModelValidator.handleValidationErrors(req, res)
        if (sentResponse) return;
        let response;
        try {
            response = await this.#service.updateLLMById(req)
            return res.status(200).json(response)
        } catch (e) {
            if (e.message === "Internal system error") {
                return res.status(500).json(e.message)
            } else if (e.message === "LLM not found") {
                return res.status(404).json(e.message) 
            }
        }
    }
}