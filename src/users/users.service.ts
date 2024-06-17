import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserException } from 'src/Exception/user.exception';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logs } from 'src/logs/logs.entity';
import { getUserDto } from 'src/dto/User.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository <User>,
    // @InjectRepository(Logs) private readonly logsRepository: Repository <Logs>,
    ) {

  }
  findAll(query :getUserDto): any {
    const take = query.pageSize || 10;
    return this.userRepository.find({
      relations:{
        profile:true,
        roles:true
      },
      where:{
         username:query.username
      },
      take:take,
      skip:(query.pageNum-1)*take
    })
  }
  getUserById(id: number): any {
  
  }
  createUser(user: Partial<User>){
    if(user.roles instanceof Array && typeof user.roles[0]==="number")
    {
      // 查询所有用户角色
      // user.roles=await
    }
    return user;
  }
}
