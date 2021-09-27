import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return "find all users";
  }

  @Get(':id')
  findOne(@Param() id: number) {
    return `find user by id : ${id}`;
  }

  @Post()
  create(@Body() createUser: any) {
    return createUser;
  }

  @Patch(':id')
  update(@Param() id: number, @Body() updateUser: any) {
    return `updateUser id : ${id}`;
  }

  @Delete('id')
  delete(@Param() id :number) {
    return `delete by user_id : ${id}`
  }
}
