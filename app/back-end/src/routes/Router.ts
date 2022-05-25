import { Router } from 'express';

import Controller from '../controllers/GenericController';
import IMiddlewares from '../interfaces/IMiddlewares';

class CustomRouter<T> {
  router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: Controller<T>,
    middleware: IMiddlewares,
    route: string = controller.route,
  ) {
    this.router.post(route, middleware.validateBody, controller.create);
    this.router.get(route, controller.getAll);
    this.router.get(`${route}/:id`, controller.getOne);
    this.router.put(
      `${route}/:id`,
      middleware.validateBody,
      controller.update,
    );
    this.router.delete(
      `${route}/:id`,
      controller.delete,
    );
  }
}

export default CustomRouter;
