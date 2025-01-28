import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private API_KEY: string = "86mfzqN3FadFAx2kUT8UMh9D6dzx23tr";
  private URL_API: string = "https://api.giphy.com/v1/gifs";

  private _tagsHistory: string[] = [];
  private gifList: Gif[] = [];

  constructor(private http: HttpClient) { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  get gifs(): Gif[] {
    return [...this.gifList];
  }

  public saveInHistory(tag: string) {
    if (tag.trim().length === 0) {
      return;
    }

    this._tagsHistory = this._tagsHistory.filter(existingTag => existingTag !== tag);

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  public searchTag(tag: string) {
    this.saveInHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.URL_API}/search`, { params })
      .subscribe(response => {
        console.log(response.data);
        this.gifList = response.data;
      });
  }
}
