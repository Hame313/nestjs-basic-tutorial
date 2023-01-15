import { User } from './models/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Param,Req } from '@nestjs/common/decorators';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){
    }
   async getUsers(): Promise <User[]>{
        return  await this.userRepository.find();
    }
    getUser(id:number){
        return this.userRepository.findOne({where: {id}});
    }
    store(createUserDto:CreateUserDto){
        return this.userRepository.save(createUserDto);}

    update( updateUserDto:UpdateUserDto,userId:number,){
        return this.userRepository.update(userId,updateUserDto );
        }
    deleteUser( userId: number){
            return this.userRepository.delete(userId);
        }
        findByEmail(email:string){
            return this.userRepository.findOne({where:{email}})
        }
}
