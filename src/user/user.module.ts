import { User } from './models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[TypeOrmModule.forFeature([User])],
  exports:[UserService],
})
export class UserModule {}
