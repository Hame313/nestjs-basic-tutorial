import { AuthGuard } from '@nestjs/passport/dist';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
    @UseGuards(AuthGuard('jwt'))
    @Get()
    profile(){
        return 'i am protect route'
    }
}
