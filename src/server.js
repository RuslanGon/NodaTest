import express from 'express';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants.js';

const app = express();
const PORT = env(ENV_VARS.PORT, 3000);

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
