import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "../../../environments/environment";
import {SvgImages} from "../types/svg-images";
import {LottieImages} from "../types/lottie-images";

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(value: SvgImages | LottieImages, args: 'image' | 'lottie' | 'png'): string {
    switch (args) {
      case 'image': return `url('${environment.assets}svg/${value}.svg')`;
      case 'lottie': return `${environment.assets}lottie/${value}.json`;
    }

  }

}
