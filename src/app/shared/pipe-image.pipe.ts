import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeImage'
})
export class PipeImagePipe implements PipeTransform {

  transform(images: string):string {


    if(images.length > 0){
      return images;
    }else{
      return 'assets/img/pngwing.com.png';
    }

    
  }
}
