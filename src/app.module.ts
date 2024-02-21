import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PersonModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: "123",
    database: 'postgresdb',
    entities: [],
    synchronize: true,
  })],
})
export class AppModule {}
