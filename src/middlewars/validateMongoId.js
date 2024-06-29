import createHttpError from "http-errors";
import { Types } from "mongoose";


export const validateMongoId = (idName = 'id') =>  (req, res, next) => {
const id = req.params[idName];
if(!id){
throw new Error('id in validateMongoId is not faund');
}

if (!Types.ObjectId.isValid(id)) {
    return next(createHttpError(400, 'Invalid Id'));
  }
  return next();
};

