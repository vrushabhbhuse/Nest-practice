import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  private readonly users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
  ];

  async login(authDto: AuthDto): Promise<any> {
    const { username, password } = authDto;
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      return { message: `User ${username} logged in successfully` };
    } else {
      return { message: 'Something went wrong' };
    }
  }
}
