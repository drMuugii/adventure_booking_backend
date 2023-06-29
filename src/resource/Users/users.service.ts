import { Injectable } from '@nestjs/common';
import { User } from './model/users.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  getUser() {
    return this.userModel.findAll();
  }
}
