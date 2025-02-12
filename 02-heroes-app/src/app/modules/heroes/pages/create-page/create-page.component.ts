import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'heroes-create-page',
  standalone: false,
  templateUrl: './create-page.component.html',
})
export class CreatePageComponent implements OnInit {

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

  public pageTitle = 'Crear';

  constructor(private heroesService: HeroesService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activateRouter.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHerobyId(id))
      ).subscribe(
        hero => {
          if (!hero) return this.router.navigate(['/heroes/all']);
          this.pageTitle = 'Editar';
          this.heroForm.reset(hero);
          return;
        }
      )
  }

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
