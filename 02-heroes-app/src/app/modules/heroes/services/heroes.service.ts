import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { catchError, map, Observable, of } from 'rxjs';

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

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}?superhero_like=${query}&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');

    return this.http.patch<Hero>(`${this.baseUrl}/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean> {

    return this.http.delete(`${this.baseUrl}/${id}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }
}
