import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()

export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ){}

  findAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne(id);
    if(!coffee) throw new NotFoundException(`Coffee id ${id} not found`)

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(createCoffeeDto);
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async delete(id: number) {
    const coffee = await this.coffeeRepository.findOne(id);
    if(!coffee) throw new NotFoundException(`Coffee id ${id} not found`);

    return this.coffeeRepository.remove(coffee);
  }
}
