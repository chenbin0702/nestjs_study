import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor() {}
  async login(user: any) {
    const { username } = user;
    return {
      access_token: username,
    };
  }
  async register(username: string, password: string) {
    const user = {
      username,
      password,
    };
    // this.userService.
    return user;
  }
}
