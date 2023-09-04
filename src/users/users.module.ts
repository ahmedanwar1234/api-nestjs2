
import { Module } from "@nestjs/common";
import UsersController from "./user.controller";

import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./user.models";
// import { PassportModule }from '@nestjs/passport'
// import { JwtModule }from '@nestjs/jwt'
// import { ConfigService }from '@nestjs/config'
// import { config } from "process";
// import { APP_GUARD } from "@nestjs/core";
// import { RolesGuard } from "./role.guard";
@Module({
    
    imports:[MongooseModule.forFeature([{name:'testchema',schema:UserSchema}])],
    controllers:[UsersController],

    providers:[UserService],
    exports:[UserService]

})
export class UserModule {}