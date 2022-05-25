import { Request, Response } from 'express';

import StatusCode from '../utils/StatusCode';

import {
  TResponseError,
} from '../types';

abstract class Controller<T> {
  abstract route: string;

  protected statusCode = StatusCode;

  abstract create(
    req: Request,
    res: Response<T | TResponseError>,
  ): Promise<typeof res>;

  abstract getAll(
    req: Request,
    res: Response<T[] | TResponseError>
  ): Promise<typeof res>;

  abstract getOne(
    req: Request,
    res: Response<T | TResponseError>
  ): Promise<typeof res>;

  abstract update(
    req: Request,
    res: Response<T | TResponseError>
  ): Promise<typeof res>;

  abstract delete(
    req: Request,
    res: Response<TResponseError>
  ): Promise<typeof res>;
}

export default Controller;
