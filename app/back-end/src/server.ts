import App from './app';

import UserController from './controllers/User';
import UserMiddleware from './middlewares/User';
import User from './interfaces/IUser';
import CustomRouter from './routes/Router';

const server = new App();

const userController = new UserController();

const userMiddleware = new UserMiddleware();

const userRouter = new CustomRouter<User>();
userRouter.addRoute(userController, userMiddleware);

server.addRouter(userRouter.router);

export default server;
