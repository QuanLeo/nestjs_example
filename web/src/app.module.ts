import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // type of our database
      host: process.env.MYSQL_HOST, // database host
      port: Number(process.env.MYSQL_PORT), // database port
      username: process.env.MYSQL_USER, // username
      password: process.env.MYSQL_PASSWORD, // user password
      database: process.env.MYSQL_DATABASE, // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: false, // your entities will be synced with the database(recommended: disable in prod)
    }),
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
