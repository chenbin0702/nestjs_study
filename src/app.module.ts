import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import  ConfigGuration from './configuration';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load:[ConfigGuration]
  }),
  TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:(configService:ConfigService)=>({
      type:"mysql",
      host:configService.get('db.host'),
      port:configService.get('db.port'),
      username:configService.get('db.username'),
      password:configService.get('db.password'),
      database:configService.get('db.database'),
      entities:[],
      synchronize:true,
      logging:['error']
    } as TypeOrmModuleOptions)
  }),
  UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
