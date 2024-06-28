import express from 'express';
import pino from  'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { notFaundMiddleware } from './middlewars/notFaundMiddleware.js';
import { errorMiddleware } from './middlewars/errorMiddleware.js';
import studentsRouter from './routers/students.js';


const app = express();

app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.use(cors());

app.use(express.json());

app.use(studentsRouter);

app.use(notFaundMiddleware);
app.use(errorMiddleware);

const PORT = env(ENV_VARS.PORT, 3000);

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
