import 'dotenv/config';
import * as joi from 'joi';

interface EnvironmentVariables {
  PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

// export const env =
const { value, error } = envSchema.validate(process.env);

if (error) {
  throw new Error(`The configuration is bad. ${error.message}`);
}

export const env: EnvironmentVariables = value;
