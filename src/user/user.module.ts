import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { IsEmailUniqueValidator } from './validator/isEmail';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, IsEmailUniqueValidator]
})
export class UserModule { }
