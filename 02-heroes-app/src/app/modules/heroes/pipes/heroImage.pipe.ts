import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroesHeroImage',
  standalone: false
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero)  {
    if (!hero.id && !hero.alt_img) {
      return 'assets/no-image.png';
    }
    return `assets/heroes/${ hero.id }.jpg`;
  }

}
