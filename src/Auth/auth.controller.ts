// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards, Request , BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async generateToken(@Body() body: { email: string }) {
    if (!body || !body.email) {
      throw new BadRequestException('Email is required');
    }
    return this.authService.generateToken(body.email);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
