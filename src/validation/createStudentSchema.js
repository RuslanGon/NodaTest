import Joi from 'joi';

export const createStudentSchema = Joi.object({
name: Joi.string().required().min(3).max(20),
age: Joi.number().integer().required().min(6).max(18),
gender: Joi.string().required().valid('male', 'female', 'other' ),
avgMark: Joi.number().required().min(2).max(18),
onDuty: Joi.Boolean(),
});

