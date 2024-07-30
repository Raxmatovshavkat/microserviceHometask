import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/db';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),
    SequelizeModule.forRootAsync({
      useFactory: databaseConfig,
    }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
