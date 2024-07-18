import { Router } from "express";
import UserValidator from "../middleware/UserValidator.js";
import UserController from "../controllers/User.controller.js";

export default class UserRoutes {

    #router
    #routeStartPoint;
    #controller

    constructor(controller = new UserController(), routeStartPoint = "/user") {
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
        
        this.#router.post(
            "/login",
            [...UserValidator.validateEmail(), ...UserValidator.validatePassword()],
            this.#controller.loginUser
        )
    }

    getRouter = () => {
        return this.#router
    }

    getRouteStartPoint = () => {
        return this.#routeStartPoint
    }

}