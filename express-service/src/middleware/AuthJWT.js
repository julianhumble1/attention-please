import jwt from "jsonwebtoken"
import User from "../models/Model.model.js"

export default class AuthJwt {

    static verifyToken = (req, res, next) => {
        let token = req.headers["x-access-token"]

        if (!token) {
            return res.status(403).send("No token provided")
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                console.log("failed to decode token")
                return res.status(401).send("Unauthorized")
            }
            
            req.userId = decoded.id;
            next();
        })
    }

    static verifyAuth = async (req, res, next) => {
        const tokenId = req.userId;
        const requestUserId = req.body.userID
        if (tokenId === requestUserId) {
            next();
        } else {
            return res.status(403).json("Unauthorized")
        }
    }

}