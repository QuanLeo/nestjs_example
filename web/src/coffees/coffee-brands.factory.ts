import { Injectable } from "@nestjs/common";

@Injectable()
export class CoffeeBrandsFactory {
  async create() {
    /** do some thing */

    return Promise.resolve(['buddy brew', 'nescafe']) // array of coffee brands,
  }
}