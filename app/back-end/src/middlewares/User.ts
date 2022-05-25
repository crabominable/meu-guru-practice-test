import {
  Request,
  Response,
  NextFunction,
} from 'express';

import {
  TBodyValidation,
  TResponseError,
} from '../types';

import StatusCode from '../utils/StatusCode';

import userValidate from '../validations/validateUser';

class CarMiddleware {
  private httpStatusCode = StatusCode;

  validateBody = (
    req: Request,
    res: Response<TBodyValidation | TResponseError>,
    next: NextFunction,
  ) => {
    const { body } = req;
    try {
      const { error, value } = userValidate(body);
      if (error) {
        const [message] = error.message;
        return res.status(this.httpStatusCode.BadRequest).json({ message });
      }
      req.body = value;

      return next();
    } catch (err) {
      return res.status(this.httpStatusCode.Internal)
        .json({ error: err });
    }
  };
}

export default CarMiddleware;
