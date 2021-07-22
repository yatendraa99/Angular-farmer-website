import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropSoil'
})
export class CropSoilPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

     let crops ="";


     for (const property in value) {
    
      crops+=(value[property])?property+" ":'';
      
    
    }


    return crops;
  }

}
