import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 33006,
    "username": "root",
    "password": "root",
    "database": "tmpdb",
    "entities": ["dist/**/entities/*{.ts,.js}"],
    "synchronize": true,
    namingStrategy: new SnakeNamingStrategy(),
  }),
 ],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) {
      console.log('DB connected!');
    }
  }
}