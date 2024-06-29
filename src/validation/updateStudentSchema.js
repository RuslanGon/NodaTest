import Joi from 'joi';

export const updateStudentSchema = Joi.object({
name: Joi.string().min(3).max(20),
age: Joi.number().integer().min(6).max(18),
gender: Joi.string().valid('male', 'female', 'other' ),
avgMark: Joi.number().min(2).max(18),
onDuty: Joi.boolean(),
});

