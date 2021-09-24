import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = this.coffeeService.findOne(id);
    if(!coffee) throw new NotFoundException(`Coffee id : ${id} not found`)

    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    const coffee = this.coffeeService.findOne(id);
    if(!coffee) throw new NotFoundException(`Coffee id : ${id} not found`)

    return this.coffeeService.delete(id);
  }
}
