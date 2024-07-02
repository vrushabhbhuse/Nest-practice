import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.userService.createUser(name, email, password);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }


  // Other routes
}
