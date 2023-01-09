import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userService.findUserByEmail(email);
      const passwordIsMatch = await bcrypt.compare(password, user.password);

      if (user && passwordIsMatch) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  login(user: any) {
    const payload = { user: user, id: user.id, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
