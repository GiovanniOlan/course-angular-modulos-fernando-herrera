import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-create-page',
  standalone: false,
  templateUrl: './create-page.component.html',
})
export class CreatePageComponent {

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  })

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  public pageTitle = 'Create Hero';

  constructor(private heroesService: HeroesService) { }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit() {
    if (this.heroForm.invalid) {
      return;
    }

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
      .subscribe(hero => {

      });

      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe(hero => {
      // TODO: Mostrar snackbar
    });


  }

}
