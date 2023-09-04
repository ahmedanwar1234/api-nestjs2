import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authanticated.guard';

@Controller('app')
export class App {

    @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req ): any {

    return req.user;
  }

@UseGuards(AuthenticatedGuard)
  @Get('protect')
  getHello():string{
    return "hellow world"
  }
}