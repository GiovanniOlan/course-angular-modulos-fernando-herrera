import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  standalone: false,
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {

  public searchInput = new FormControl('');

  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroesService: HeroesService) { }

  searchHero(): void {
    const value = this.searchInput.value || '';
    this.heroesService.getSuggestions(value)
      .subscribe(
        heroes => this.heroes = heroes,
      )
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value){
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }
}
