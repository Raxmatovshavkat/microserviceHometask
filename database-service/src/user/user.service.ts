import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User){

  }
  async create(createUserDto: CreateUserDto) {
    return this.userModel.create({...createUserDto})
  }

  async findAll() {
    const user=this.userModel.findAll()
    if(!user){
      throw new NotFoundException()
    }
    return user
  }

  async findOne(id: number) {
    const user=this.userModel.findByPk(id)
    if (!user) {
      throw new NotFoundException()
    }
    return user
  }



  remove(id: number) {
    const user = this.userModel.findByPk(id)
    if (!user) {
      throw new NotFoundException()
    }
    return user
  }
}
