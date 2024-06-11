import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserException } from 'src/Exception/user.exception';

@Injectable()
export class UsersService {
  constructor(private configServie: ConfigService) {

  }
  getUsers(): any {
    let res = {

      data: [{ id: 1, name: 'siva' }, { id: 2, name: 'siva' }],
      code: 200
    }
    return res;

  }
  getUserById(id: number): any {
    if (id > 0)
      {
        const data=this.configServie.get('db').host
        return data
      }
    else
      throw new NotFoundException()
  }
}
