import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { Event } from 'src/events/entities/event.entity';
import { CoffeeBrandsFactory } from './coffee-brands.factory';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: COFFEE_BRANDS, // using none class provider Token
      useFactory: async (brandsFactory: CoffeeBrandsFactory) => await brandsFactory.create(),
      inject: [CoffeeBrandsFactory]
    },
  ],
  exports: [CoffeesService] //public CoffeesService for other class import CoffeesModule
})
export class CoffeesModule {}
