import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UpdateUserDot } from "./dtos/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductSchema, UserDocument } from "./user.models";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { CreateUser } from "./dtos/create-user.dto";
@Injectable()
export class UserService{
    constructor(@InjectModel('testchema') private readonly usermodel:Model<UserDocument>  ){}
  private  users:UserEntity[]=[]

async findUsers(){
const users=await this.usermodel.find().exec()
return users
}


async findUserById(username:any):Promise<any>{

   const the_user= await this.usermodel.find({username})
   if(!the_user){
    throw new NotFoundException('could not find user')
   }
return the_user
    
}
async createUser(userdata:CreateUser){
 const newproduct=new  this.usermodel(userdata)
    const result=await newproduct.save()

    //some logic
    return [{message:'this updat is succsseful',result}]
    
  

}

async updateUser(id:string,inputBody:UserDocument){
// 1- find the element index that we want to update

const userAfterUpdate=await  this.usermodel.findByIdAndUpdate(id,inputBody)

    //logic

    return userAfterUpdate
}

async delete(id:string){
await  this.usermodel.findByIdAndRemove(id)
return 'true delted'
}




}