import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDescriptionsToCoffees1632571487933 implements MigrationInterface {
  name = 'AddDescriptionsToCoffees1632571487933'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`web_developement\`.\`coffee\` ADD \`descriptions\` varchar(255) NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`web_developement\`.\`coffee\` DROP COLUMN \`descriptions\``);
  }
}
