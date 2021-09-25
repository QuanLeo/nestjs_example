import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumnNameToTitleInCoffees1632570978509 implements MigrationInterface {
    name = 'RenameColumnNameToTitleInCoffees1632570978509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE coffee CHANGE name title VARCHAR(225);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE coffee CHANGE title name VARCHAR(225);`);
    }

}
