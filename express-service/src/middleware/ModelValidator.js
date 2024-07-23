import * as expressValidator from "express-validator"

export default class ModelValidator {

    static validateModelEdit = () => {
        return [
            expressValidator.body("type")
                .optional({ checkFalsy: true })
                .custom(value => value === "model"),
            
            expressValidator.body("name")
                .optional({ checkFalsy: true })
                .isString().withMessage("Name must be a string"),
            
            expressValidator.body("organization")
                .optional({ checkFalsy: true })
                .isString().withMessage("Organization must be a string"),
            
            expressValidator.body("description")
                .optional({ checkFalsy: true })
                .isString().withMessage("Description must be a string"),
            
            expressValidator.body("created_date")
                .optional({ checkFalsy: true })
                .custom(value => {
                    const date = new Date(value);
                    if (!isNaN(date.getTime())) {
                        // The date is valid
                        return true;
                    } else {
                        // The date is invalid
                        throw new Error("created_date must be a valid date");
                    }
                }),
            
            expressValidator.body("size")
                .optional({ checkFalsy: true })
                .isString().withMessage("Size must be of type string"),
            
            expressValidator.body("size_int")
                .optional({ checkFalsy: true })
                .isNumeric().withMessage("size_int must be a number"),
            
            expressValidator.body("modality")
                .optional({ checkFalsy: true })
                .isString().withMessage("Modality must be a string"),

            expressValidator.body("access")
                .optional({ checkFalsy: true })
                .isString().withMessage("Access must be a string"),

            expressValidator.body("license")
                .optional({ checkFalsy: true })
                .isString().withMessage("License must be a string"),
            
            expressValidator.body("dependencies")
                .optional({ checkFalsy: true })
                .isString().withMessage("Dependencies must be a string"),
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