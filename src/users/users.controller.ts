import { Body, Controller, Get, HttpException, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { get } from 'http';
import { User } from './users.entity';
import { getUserDto } from 'src/dto/User.dto';

@Controller('user')
export class UsersController {
  constructor(private usersService : UsersService) {}
  @Post('/add')
  createUser(@Body() body: any) {
    const {username,password}=body
    if(!username||!password)
    {
      throw new HttpException('用户名或密码不能为空',400)
    }
    const user=body as User
    // return this.usersService.createUser();
  }
  @Get('/list')
  getUsersList(@Query() query: getUserDto):any {
    return this.usersService.findAll(query);
  } 
 @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }
  
}
