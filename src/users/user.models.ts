import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import { IsEmail, IsString, Length } from "class-validator"

export type UserDocument=ProductSchema & Document

@Schema()
export class ProductSchema{


    @Prop()
    @Length(3,20,{message:"error in length"})
    username:string

    @Prop()
    description:string


   
    @Prop({required:[true,"the email not found"]})
    email:string

    @Prop()
    password:string

    @Prop({default:Date.now})
    data_added:Date
}

export const UserSchema=SchemaFactory.createForClass(ProductSchema)


























// import { Prop } from '@nestjs/mongoose'
// import { isString } from 'class-validator'
// import * as mongoose from 'mongoose'

// export const productSchema=new mongoose.Schema({
    
// title:{type:String
//     , required:[true,"should be title in schema"],
//     unique:true

// },
// description:String,
// price:Number


// })

// export interface userr {

//     id?:string 
//     title:string
//     description:string


//     price :string
// }