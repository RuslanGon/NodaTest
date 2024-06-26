import express from 'express';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants.js';
import { notFaundMiddleware } from './middlewars/notFaundMiddleware.js';
import { errorMiddleware } from './middlewars/errorMiddleware.js';




const app = express();

app.use(cors());

app.get('/students', (req, res, next) => {

});

app.get('/students/studentId', (req, res, next) => {

});


app.use(notFaundMiddleware);
app.use(errorMiddleware);

const PORT = env(ENV_VARS.PORT, 3000);

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
