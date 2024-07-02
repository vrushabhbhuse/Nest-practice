import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // Change this if your PostgreSQL server is hosted elsewhere
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'practice_project',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // Set to false in production
};
