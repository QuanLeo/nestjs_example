import { Injectable } from "@nestjs/common";

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    /** do some thing */

    return ['buddy brew', 'nescafe'] // array of coffee brands,
  }
}