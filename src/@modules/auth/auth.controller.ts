import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';

@Controller('auth')
export class AuthController {
    @Post('register')
    registerUser(@Body()userObj : RegisterAuthDto){
        console.log(userObj);
        return userObj;
    }
    @Post('login')
    login(@Body() credenciales : LoginAuthDto){

    }
}