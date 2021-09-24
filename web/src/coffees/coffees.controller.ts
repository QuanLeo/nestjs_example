import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService){}

  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const coffee = this.coffeeService.findOne(id);
    if(!coffee) throw new NotFoundException(`Coffee id : ${id} not found`)

    return coffee
  }

  @Post()
  create(@Body() params: any) {
    return this.coffeeService.create(params);
  }

  @Patch()
  update(@Param('id') id: number, @Body() params: any) {
    const coffee = this.coffeeService.findOne(id);
    if(!coffee) throw new NotFoundException(`Coffee id : ${id} not found`)

    return this.coffeeService.update(id, params);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    const coffee = this.coffeeService.findOne(id);
    if(!coffee) throw new NotFoundException(`Coffee id : ${id} not found`)

    return this.coffeeService.delete(id);
  }
}
