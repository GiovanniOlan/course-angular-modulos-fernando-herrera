import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'heroes-hero-page',
  standalone: false,
  templateUrl: './hero-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(private heroeService: HeroesService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHerobyId(id))
      ).subscribe(hero => {
        if (!hero) return this.router.navigate(['/heroes/all']);
        return this.hero = hero;
      })
  }
}
