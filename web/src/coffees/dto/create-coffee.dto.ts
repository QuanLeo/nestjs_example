import { IsNumber, IsString } from "class-validator";

export class CreateCoffeeDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly brand: string;

  @IsString()
  readonly descriptions: string;

  @IsString({ each: true })
  readonly flavors: string[];

  @IsNumber()
  readonly recommendations: number;
}
