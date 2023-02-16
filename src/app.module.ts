import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [UserModule, AuthModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
