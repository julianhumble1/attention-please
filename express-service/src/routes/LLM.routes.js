import { Router } from "express";
import LLMController from "../controllers/LLM.controller.js";

export default class LLMRoutes {

    #router
    #routeStartPoint;
    #controller

    constructor(controller = new LLMController(), routeStartPoint = "/") {
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
    }

    getRouter = () => {
        return this.#router
    }

    getRouteStartPoint = () => {
        return this.#routeStartPoint
    }
}