import Joi from 'joi';

export const createStudentSchema = Joi.object({
    name: Joi.string().required().min(3).max(20).messages({
        "string.base": "Имя должно быть строкой",
        "string.empty": "Имя не может быть пустым",
        "string.min": "Минимальная длина имени - 3 символа",
        "string.max": "Максимальная длина имени - 20 символов",
        "any.required": "Имя является обязательным"
    }),
    age: Joi.number().integer().required().min(6).max(18).messages({
        "number.base": "Возраст должен быть числом",
        "number.integer": "Возраст должен быть целым числом",
        "number.min": "Минимальный возраст - 6 лет",
        "number.max": "Максимальный возраст - 18 лет",
        "any.required": "Возраст является обязательным"
    }),
    gender: Joi.string().required().valid('male', 'female', 'other').messages({
        "string.base": "Пол должен быть строкой",
        "any.only": "Пол должен быть 'male', 'female' или 'other'",
        "any.required": "Пол является обязательным"
    }),
    avgMark: Joi.number().required().min(2).max(18).messages({
        "number.base": "Средний балл должен быть числом",
        "number.min": "Минимальный средний балл - 2",
        "number.max": "Максимальный средний балл - 18",
        "any.required": "Средний балл является обязательным"
    }),
    onDuty: Joi.boolean().messages({
        "boolean.base": "Значение 'onDuty' должно быть булевым"
    })
});

