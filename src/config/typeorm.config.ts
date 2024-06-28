import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // Change this if your PostgreSQL server is hosted elsewhere
  port: 5432,
  username: 'your-username',
  password: 'your-password',
  database: 'your-database',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // Set to false in production
};
