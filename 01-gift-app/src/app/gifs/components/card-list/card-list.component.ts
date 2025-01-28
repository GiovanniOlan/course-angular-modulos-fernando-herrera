import { Component, Input } from '@angular/core';
import { Data } from '../../interfaces/card-list.interfaces';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input({required: true}) data: Data[] = [];

  constructor() { }
}
