import User from '../interfaces/IUser';

import UserModel from '../models/User';

class UserService {
  model: any;

  constructor() {
    this.model = new UserModel();
  }

  create = async (
    obj: User,
  ): Promise<User> => {
    const newUser = await this.model.create(obj);
    return newUser;
  };

  getAll = async (): Promise<User[]> => {
    const allUsers = await this.model.getAll();
    return allUsers;
  };

  getOne = async (id: string): Promise<User | null> => {
    const user = await this.model.getOne(id);
    return user;
  };

  update = async (
    id: string,
    obj: User,
  ): Promise<User> => {
    const user = await this.model.update(id, obj);
    return user;
  };

  delete = async (
    id: string,
  ): Promise<User> => {
    const user = await this.model.delete(id);
    return user;
  };
}

export default UserService;
