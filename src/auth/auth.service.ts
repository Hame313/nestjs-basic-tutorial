import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private userService:UserService,
        private jwtService: JwtService,
        ){}


    async validateUser(email:string, password: string){
        const user= await this.userService.findByEmail(email);
        if(user){
            if(user.password === password){
                return user;
            }
            return null;
        }
        return null;
    }
    async login(user: any){
        const payload={email: user.email, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload),
        }
    }    
}
