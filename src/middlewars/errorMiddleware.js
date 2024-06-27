import { isHttpError } from 'http-errors';

export const errorMiddleware = (error, req, res, next) => {
if (isHttpError(error)){
   return res.status(error.status).json({
        status: error.status,
        message: error.message,
      });
}

  res.status(500).json({
    status: 500,
    message: 'Internal server error',
    data: {
      message: error.message,
    },
  });
};
