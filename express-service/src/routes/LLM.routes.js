import { Router } from "express";
import LLMController from "../controllers/LLM.controller.js";
import AuthJwt from "../middleware/authJWT.js";
import ModelValidator from "../middleware/ModelValidator.js";

export default class LLMRoutes {

    #router
    #routeStartPoint;
    #controller

    constructor(controller = new LLMController(), routeStartPoint = "/llm") {
        this.#routeStartPoint = routeStartPoint;
        this.#router = new Router();
        this.#controller = controller;
        this.#initialiseRoutes()
    }

    #initialiseRoutes = () => {

        this.#router.use((req, res, next) => {
            res.header(`Access-Control-Allow-Headers`, `x-access-token, Origin, Content-Type, Accept`);
            next();
        }); 

        this.#router.get(
            "/",
            this.#controller.getAllLLMs
        )

        this.#router.get(
            "/single?",
            this.#controller.getLLMById
        )

        this.#router.patch(
            "/update?",
            [AuthJwt.verifyToken, AuthJwt.verifyAuth, ...ModelValidator.validateModelEdit()],
            this.#controller.updateLLMById
        )
    }

    getRouter = () => {
        return this.#router
    }

    getRouteStartPoint = () => {
        return this.#routeStartPoint
    }
}