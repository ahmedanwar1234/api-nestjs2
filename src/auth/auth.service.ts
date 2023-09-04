import { Injectable,UnauthorizedException } from '@nestjs/common';
import { CreateUser } from 'src/users/dtos/create-user.dto';
import { UserService } from 'src/users/user.service';

import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

constructor(private usersService:UserService,private jwtService:JwtService  ){}

async signIn(username:string,pass:string):Promise<any>{
    

const user=await this.usersService.findUserById(username)
const the_user=user[0]

if(the_user.password !== pass){
    console.log(pass)
    console.log(the_user.password)
    throw new UnauthorizedException();
}

const payload={sub:the_user._id,username:the_user.username};

return{access_token:await this.jwtService.signAsync(payload)}
// return the_user
}






signup(data:CreateUser){
const user=this.usersService.createUser(data)

return user


}





}
