import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ClassCustomValidationPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata):string {
   // logic for the value 


    return value
  }
}