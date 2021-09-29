import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  create(createUserDto: any) {
    const user = this.userRepository.create({
      ...createUserDto,
    });
    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: any) {
    const user = await this.userRepository.preload({
      id: +id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return this.userRepository.save(user);
  }

  async delete(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException(`user id ${id} not found`);

    return this.userRepository.remove(user);
  }
}
