import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {ConfigModule, ConfigService} from '@nestjs/config';
import  ConfigGuration from './configuration';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.entity';
import { RoleController } from './role/role.controller';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.entity';
import { Logs } from './logs/logs.entity';
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
      entities:[User,Profile,Role,Logs],
      synchronize:true,
      logging:['error']
    } as TypeOrmModuleOptions)
  }),
  UsersModule,
  ProfileModule,
  RoleModule],
  controllers: [ProfileController, RoleController],
  providers: [],
  
})
export class AppModule {}
