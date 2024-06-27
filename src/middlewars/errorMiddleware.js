import { isHttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorMiddleware = (error, req, res, next) => {
if (isHttpError(error)){
   return res.status(error.status).json({
        status: error.status,
        message: error.message,
      });
}

if(error instanceof MongooseError){
  return res.status(error.status).json({
    status: error.status,
    message: 'Mongoose error',
    data: {
     message: error.data,
    }
  });
};

  res.status(500).json({
    status: 500,
    message: 'Internal server error',
    data: {
      message: error.message,
    },
  });
};
