import Joi from "joi";

export const schemaTeam = Joi.object({
    pointGuard: Joi.string().required(),
    shootingGuard: Joi.string().required(),
    smallForward: Joi.string().required(),
    powerForward: Joi.string().required(),
    center: Joi.string().required()
})