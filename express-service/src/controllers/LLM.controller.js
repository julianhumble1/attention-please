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
        console.log(req.query.id)
        try {
            response = await this.#service.getLLMById(req.query.id)
            return res.status(200).json(response)
        } catch (e) {
            return res.status(503).json(e.message)
        }
    }
}