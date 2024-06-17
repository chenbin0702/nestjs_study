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
import { AuthModule } from './auth/auth.module';
const entitiesDir=process.env.NODE_ENV==="test"?[__dirname+"/**/*.entity.ts"]:[__dirname+"/**/*.entity{.js,.ts}"]
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
      entities:entitiesDir,
      synchronize:true,
      logging:process.env.NODE_ENV==="development"?true:false
    } as TypeOrmModuleOptions)
  }),
  UsersModule,
  ProfileModule,
  RoleModule,
  AuthModule],
  controllers: [ProfileController, RoleController],
  providers: [],
  
})
export class AppModule {}
