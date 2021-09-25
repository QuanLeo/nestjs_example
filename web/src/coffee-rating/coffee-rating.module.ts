import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [CoffeesModule], //if you want to use any class in CoffeesModule, you must export it.
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}
