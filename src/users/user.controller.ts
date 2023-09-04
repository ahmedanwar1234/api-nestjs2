import { BadRequestException, Body, Controller,Delete,Get, HttpCode, HttpStatus, NotFoundException, Param, ParseUUIDPipe, Patch, Post, Query, UsePipes, ValidationPipe,UseGuards } from "@nestjs/common";
import { CreateUser } from "./dtos/create-user.dto";
// import { UpdateUserDot } from "./dtos/update-user.dto";
import { UserEntity } from "./user.entity";
import { ClassCustomValidationPipe } from "./pipes/validation.pipe";
import { UserService } from "./user.service";
import { BeltGuard } from "src/belt/belt.guard";
import { Public } from "src/auth/decerators/public.decorator";
import { Roles } from "./decerators/roles.decorator";
import { Role } from "./enums/role.enum";
import { RolesGuard } from "./role.guard";

@Public()
@UsePipes(ValidationPipe)
@Controller('users')
export default class UsersController{
    constructor(private readonly userService:UserService){}


 users:UserEntity[]=[]


@Get()
find(@Query("username") username:string ){
    return this.userService.findUsers()
}

//---get one user

@Get('/username')
findOne(@Body("username") username:string){
return this.userService.findUserById(username)
}



//---post
@UsePipes()
@Post()
@UseGuards(BeltGuard)
async create(@Body() userdata){
try {
  return await this.userService.createUser(userdata)
} catch (error) {
  throw new  BadRequestException(error)
}

}

//---upadate
@Patch(':id')
 update(@Body() inputBody,@Param('id') id:string){
 return this.userService.updateUser(id,inputBody)


}

//remove
@Delete(':id')
@HttpCode(404)
remove(@Param('id')id:string){

return this.userService.delete(id)
  
}

}