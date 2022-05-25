import { PrismaClient } from '@prisma/client';

import User from '../interfaces/IUser';

class UserModel {
  model: any;

  constructor() {
    this.model = new PrismaClient().user;
  }

  create = async (obj: User) => this.model.create({ data: { ...obj } });

  getAll = async () => this.model.findMany();

  getOne = async (id: string) => this.model.findUnique({ where: { id: Number(id) } });

  update = async (
    id: string,
    obj: User,
  ) => this.model.update({ where: { id: Number(id) }, data: { ...obj } });

  delete = async (
    id: string,
  ) => this.model.deleteMany({ where: { id: Number(id) } });
}

export default UserModel;
