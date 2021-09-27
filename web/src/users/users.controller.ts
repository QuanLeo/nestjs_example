import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUser: any) {
    return this.usersService.create(createUser);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUser: any) {
    return this.usersService.update(id, updateUser);
  }

  @Delete(':id')
  delete(@Param('id') id :number) {
    return this.usersService.delete(id)
  }
}
