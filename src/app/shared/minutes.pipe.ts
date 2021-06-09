import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes'
})
export class MinutesPipe implements PipeTransform {

  transform( segundos: number): any {
    var ms = segundos,
    min = Math.floor((ms/1000/60) << 0),
    sec = Math.floor((ms/1000) % 60);
    
    return (min + ':' + sec);

  }
  
} 


