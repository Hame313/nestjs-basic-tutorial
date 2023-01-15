import { ParseIntPipe } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { Body, Delete } from '@nestjs/common/decorators';
import { Param } from '@nestjs/common/decorators';
import { Controller, Get, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';


@Controller('user')
export class UserController {
    constructor(private userService: UserService){ }
    @Get()
    getUsers(@Body() createUserDto: CreateUserDto){
        return this.userService.getUsers();
    }
    @Post()
    store(@Body() createUserDto: CreateUserDto){
        return this.userService.store(createUserDto);
    }
    @Patch('/:userId')
    update(@Body() updateUserDto: UpdateUserDto,@Param('userId',ParseIntPipe) userId:number){
        return this.userService.update( updateUserDto,userId);
    }
    @Get('/:userId')
    getUser(@Param('userId',ParseIntPipe) userId: number){
        return this.userService.getUser(userId);
    }
    @Delete('/:userId')
    deleteUser(@Param('userId',ParseIntPipe) userId: number){
        return this.userService.deleteUser(userId)
    }
}
