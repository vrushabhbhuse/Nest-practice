import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}
    
      async createUser(name: string, email: string, password: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password
        const user = this.userRepository.create({ name, email, password: hashedPassword });
        return this.userRepository.save(user);
      }
    
      async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
      }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Other methods
}
