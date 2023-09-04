import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './decerators/public.decorator';

@Controller('auth')
export class AuthController {
constructor(private authService:AuthService){}

@HttpCode(HttpStatus.OK)
@Post('signin')
signIn(@Body() signInDto){
    console.log(signInDto)
    return this.authService.signIn(signInDto.username,signInDto.password)
}

@Post('signup')
signup(@Body() data){
    const user=this.authService.signup(data)

return user
}
@Public()
@UseGuards(AuthGuard)
@Get('profile')
getProfile(@Request() req) {
 console.log(req.user)
    return req.user
  }


}
