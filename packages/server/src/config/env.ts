import { IEnv } from "../types/env";
import dotenv from "dotenv";

dotenv.config();

export const env: IEnv = {
    PORT: parseInt(process.env.PORT || "3000"),
    NODE_ENV: process.env.NODE_ENV as 'development' | 'production' | 'test',

    ORIGIN: process.env.ORIGIN || (() => {
        throw new Error('ORIGIN must be defined');
    })(),
};