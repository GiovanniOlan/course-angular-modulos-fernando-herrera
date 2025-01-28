import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';
import { Data } from '../../interfaces/card-list.interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifService: GifsService) { }

  get giftResult(): Data[] {
    return this.gifService.gifList.map(gif => ({
      imgUrl: gif.images.original.url,
      slug: gif.slug
    }));
  }
}
