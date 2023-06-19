import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1687218059689 implements MigrationInterface {
    name = 'migration1687218059689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "typedWordDataset"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "wordNumberLabels"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "wpmDataset"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "incorrectCharsDataset"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "time" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD "incorrectCharsDataset" integer array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD "wpmDataset" integer array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD "wordNumberLabels" integer array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test" ADD "typedWordDataset" text array NOT NULL`);
    }

}
