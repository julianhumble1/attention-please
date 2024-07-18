import UserService from "../services/User.service.js";
import UserValidator from "../middleware/UserValidator.js";

export default class UserController {

    #service;

    constructor(service = new UserService()) {
        this.#service = service
    }

    loginUser = async (req, res) => {
        const sentResponse = UserValidator.handleValidationErrors(req, res)
        if (sentResponse) return;
        let response;
        try {
            response = await this.#service.loginUser(req.body)
        } catch (e) {
            if (e.message === "Internal system error") {
                return res.status(500).json(e.message)
            } else if (e.message === "User not found in database") {
                return res.status(404).json(e.message)
            }
        }

        if (response.accessToken === null) {
            return res.status(401).json("Invalid username/password combination")
        } else {
            return res.status(201).json(response)
        }
    }

}