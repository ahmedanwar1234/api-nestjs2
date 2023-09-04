import {Module} from '@nestjs/common'
import{MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './users/users.module'
import { AuthModule } from './auth/auth.module';
import { App } from './app.controller';
@Module({
    
imports:[UserModule,AuthModule,MongooseModule.forRoot('mongodb+srv://ahmedanswar123:O8cYu7Wod3w1cZoE@cluster0.wabnexf.mongodb.net/natours?retryWrites=true&w=majority')],
controllers:[App]
})
export class AppModule{

}
