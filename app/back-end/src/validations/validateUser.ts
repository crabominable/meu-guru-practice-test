import Joi from 'joi';

import { TBodyValidate } from '../types';

const userSchema = Joi.object({
  name: Joi.string().trim().min(3).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(8).required(),
});

const userValidate: TBodyValidate = (body) => {
  const { error, value } = userSchema.validate(body);

  return { error, value };
};

export default userValidate;
