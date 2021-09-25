import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Injectable()
export class CoffeeRatingService {
  // Ex: I want use CoffeesService in CoffeesModule
  // you must export CoffeesService in CoffeesModule
  constructor(private readonly coffeeService: CoffeesService){}

}
