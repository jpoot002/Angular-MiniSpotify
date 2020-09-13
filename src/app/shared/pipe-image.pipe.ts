import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeImage'
})
export class PipeImagePipe implements PipeTransform {

  transform(images: any[]):string {
    if(!images){
      return 'assets/img/pngwing.com.png';
    }

    if(images.length > 0){
      return images[0].url;
    }else{
      return 'assets/img/pngwing.com.png';
    }
  }
}
