import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express'
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session'
import *as passport from 'passport'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{cors:true});
  app.use(
session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:false,
  cookie:{maxAge:360000}
})

  )
  app.use(passport.initialize())
app.use(passport.session())
  app.useGlobalPipes(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true,validationError:{target:true}}))
  await app.listen(5000);
}
bootstrap();
