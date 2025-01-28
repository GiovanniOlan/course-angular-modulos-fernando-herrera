import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  standalone: false,

  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  constructor(private gifsService: GifsService) { }

  get gifs_result(): Gif[] {
    return this.gifsService.gifs;
  }

}
