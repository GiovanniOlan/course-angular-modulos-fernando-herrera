import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}`);
  }

  getHerobyId(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/${id}`)
      .pipe(catchError(err => of(undefined)));
  }
}
