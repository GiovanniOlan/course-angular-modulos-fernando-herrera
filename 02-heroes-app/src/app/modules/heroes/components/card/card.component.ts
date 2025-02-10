import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-heroe-card',
  standalone: false,
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ hero.superhero }}</mat-card-title>
        <mat-card-subtitle>{{ hero.alter_ego }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="hero | heroesHeroImage" [alt]="'Imagen de ' + hero.superhero ">
      <mat-card-content class="mt-2">
        <h4>{{ hero.publisher }}</h4>
        <p>
          <strong>Primero aparición</strong> {{ hero.first_appearance }}
          <br>
          <mat-chip-listbox>
            <mat-chip *ngFor=" let name of hero.characters.split(',') | slice:0:3 ">{{ name }}</mat-chip>
          </mat-chip-listbox>
        </p>
      </mat-card-content>

      <mat-card-actions>
        <button
          mat-button
          mat-raised
          color="primary"
          [routerLink]="['/heroes/edit', hero.id]"
        >
          <mat-icon>edit</mat-icon>
          Editar
        </button>

        <span class="spacer"></span>

        <button
          mat-button
          mat-raised
          [routerLink]="['/heroes', hero.id]"
        >
          <mat-icon>more_horizontal</mat-icon>
          Más...
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  @Input({
    required: true
  })
  public hero!: Hero;
}
