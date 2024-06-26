import mongoose from "mongoose";
import {env} from '../utils/env.js';
import { ENV_VARS } from "../constants";


export const initMongoConection = () => {
  const conectionLink = `mongodb+srv://${env(ENV_VARS.MONGODB_USER)}:${env(
    ENV_VARS.MONGODB_PASSWORD,
  )}@${env(ENV_VARS.MONGODB_URL)}/${env(
    ENV_VARS.MONGODB_DB,
  )}?retryWrites=true&w=majority&appName=Cluster0`;
};
