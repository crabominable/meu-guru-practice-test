import { Request, Response } from 'express';

import Controller from './GenericController';
import UserService from '../services/User';

import User from '../interfaces/IUser';
import { TResponseError } from '../types';

class UserController extends Controller<User> {
  private $route: string;

  private objectNotFound: string;

  private service: any;

  constructor(
    route = '/users',
  ) {
    super();
    this.$route = route;
    this.objectNotFound = 'Object not found';
    this.service = new UserService();
  }

  get route() { return this.$route; }

  create = async (
    req: Request,
    res: Response<User | TResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const car = await this.service.create(body);
      if (!car) {
        return res.status(this.statusCode.NotFound)
          .json(car);
      }
      return res.status(this.statusCode.Created)
        .json(car);
    } catch (err) {
      return res.status(this.statusCode.Internal)
        .json({ error: this.statusCode.Internal });
    }
  };

  getAll = async (
    _req: Request,
    res: Response<User[] | TResponseError>,
  ): Promise<typeof res> => {
    try {
      const cars = await this.service.getAll();
      return res.status(this.statusCode.Ok).json(cars);
    } catch (err) {
      return res.status(this.statusCode.Internal).json({ error: err });
    }
  };

  getOne = async (
    req: Request,
    res: Response<User | null | TResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const car = await this.service.getOne(id);
      if (!car) {
        return res.status(this.statusCode.NotFound)
          .json({ error: this.objectNotFound });
      }
      return res.status(this.statusCode.Ok).json(car);
    } catch (err) {
      return res.status(this.statusCode.Internal).json({ error: err });
    }
  };

  update = async (
    req: Request,
    res: Response<User | null | TResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const updatedCar = await this.service.update(id, req.body);
      if (!updatedCar) {
        return res.status(this.statusCode.NotFound)
          .json({ error: this.objectNotFound });
      }
      return res.status(this.statusCode.Ok).json(updatedCar);
    } catch (err) {
      return res.status(this.statusCode.Internal).json({ error: err });
    }
  };

  delete = async (
    req: Request,
    res: Response<TResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const car = await this.service.delete(id);
      if (!car) {
        return res.status(this.statusCode.NotFound)
          .json({ error: this.objectNotFound });
      }
      await this.service.delete(id);
      return res.status(this.statusCode.NoContent).json();
    } catch (err) {
      console.log(err);
      return res.status(this.statusCode.Internal).json({ error: err });
    }
  };
}

export default UserController;
