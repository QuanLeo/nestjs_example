# nestjs_example

## Review
  - Introduce:
    - This is my example to learn `nestjs`
    - I learn it in https://learn.nestjs.com/courses
  - Services:
    - Docker
    - Mysql
    - Phpmyadmin

## Running
  - Config:
    - config `.env` file
    - manual config file `ormconfig.js` when running migrate
  - Migration:
    - Creating a TypeOrm Migration. CoffeeRefactor being the NAME we are giving "this" migration
      ```
        npx typeorm migration:create -n CoffeeRefactor
      ```
    - Running migrations:
      - Note:
        - You must BUILD your Nest project (so that everything is output to the `/dist/` folder,
        - Before a Migration can run, it needs compilated files.

    - Compile project first
      ```
        npm run build
      ```
    -  Run migration(s)
      ```
        npx typeorm migration:run
      ```

    - REVERT migration(s)
      ```
        npx typeorm migration:revert
      ```

    - Let TypeOrm generate migrations (for you)
      ```
        npx typeorm migration:generate -n SchemaSync
        npx typeorm migration:generate -n AddDescriptionsToCoffees
      ```
## Structure & Command line:
  - Note:
    - Some file need to be test, File test have suffix `.spec`.
    - If don't want generate `.spec` file, add `--no-spec` in last command line

  - Controller:
    - Responsible for handling incoming requests and returning responses to the client.
    - Using `Service` to handle logic
    - Prefer add `.spec` file
    - Create file using cli (Ex: `coffees`)::
    ```
      nest g co coffees
    ```
  - Services:
    - Responsible for data storage and retrieval in database
    - Contain `Repository<Entity>` to working with database
    - Prefer add `.spec` file
    - Create file using cli (Ex: `coffees`):
    ```
      nest g s coffees
    ```

  - Module:
    - Wrap `Controllers` and `Services` (`Encapsulation`)
    - `.spec` file is optional
    - Create module file (Ex: `coffees`):
    ```
      nest g mo coffees
    ```

  - Data Transfer Object (DTO):
    - Using `validate` & `serialize` data from `Request` (create| update)
    - `.spec` file is optional
    - Generate `DTO` files:
    ```
      nest g class coffees/dto/create-coffee.dto --no-spec
      nest g class coffees/dto/update-coffee.dto --no-spec
    ```

  - Entity:
    - Using as `schema` of tables
    - Read [typeorm](https://typeorm.io/) to more details (schema, relationship, transaction,...)
    - Create `Entity` file:
      - I create it manual.
      - Prefer create it same as this example code (`directory`, `class name`, `validate`, ...).

  - Repository:
    - A part of `Service`
    - Work directly with database (CRUD)
    - Read `nestjs` doc about[Repository](https://docs.nestjs.com/recipes/sql-typeorm#repository-pattern)
    - [Repository](https://typeorm.io/#/working-with-repository) in `typeorm`