import * as expressValidator from "express-validator"

export default class UserValidator {

    static validateEmail = () => {
        return [
                expressValidator.body("email")
                    .isEmail().withMessage("Invalid email format")
            ];
        } 

    static validatePassword = () => {
        return [
                expressValidator.body("password")
                    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
                    .matches(/\d/).withMessage("Password must contain a number")
                    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("Password must contain a special character")
            ]
        } 

    static handleValidationErrors = (req, res) => {
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            const extractedErrors = [];
            errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
            res.status(400).json({
                errors:extractedErrors
            })
            return true
        }
        return;
    }
}