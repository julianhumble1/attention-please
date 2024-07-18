import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class UserService {

    loginUser = async ({ email, password }) => {
        let user;
        try {
            user = await User.findOne({ email: email })
            // user = await User.find({})
        } catch (e) {
            throw new Error("Internal system error")
        }

        if (!user) {
            throw new Error("User not found in database")
        }


        const passwordsMatch = (password === user.password)

        if (!passwordsMatch) {
            return {
                accessToken : null
            }
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 })
        return {
            id: user.id,
            email: user.email,
            accessToken: token
        }
    } 
}