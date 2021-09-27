import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{
    id: 1,
    name: "test1",
    email: "test@example.com",
    password: 12345,
    role: 1,
  }];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === +id);
  }

  create(createUserDto: any) {
    this.users.push(createUserDto);
  }

  update(id: number, updateUserDto: any) {
    const existingUser = this.findOne(id);
    if (existingUser) {
      // update the existing entity
    }
  }

  delete(id: number) {
    const userIndex = this.users.findIndex(user => user.id === +id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
  }
}
