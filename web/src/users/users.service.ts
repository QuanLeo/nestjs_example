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

  create(createCoffeeDto: any) {
    this.users.push(createCoffeeDto);
  }

  update(id: number, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
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
