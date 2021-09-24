import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `show all coffees limit : ${limit} , offset : ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `show coffee by id: ${id}`
  }

  @Post()
  create(@Body() params: any) {
    return params;
  }

  @Patch()
  update(@Param('id') id: number, @Body() params: any) {
    return `Update coffee by id: ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return `delete by id : ${id}`
  }
}
