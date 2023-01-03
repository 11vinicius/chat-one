import { Controller, Request, Post, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req) {
    return this.authService.login(req.user);
  }
}
