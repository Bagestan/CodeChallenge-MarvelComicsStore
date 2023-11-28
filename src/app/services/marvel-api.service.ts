import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as Md5 from 'js-md5';
import { BehaviorSubject, Observable } from 'rxjs';
import { ComicDataWrapper } from './comic-types';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  privateKey = '6d53fc3ff7d280903674317614830ed311cc6257';
  publicKey = '6ba597247f7744ba170cc1eec992f833';
  apiUrl = 'https://gateway.marvel.com/v1/public/';

  private allComics = new BehaviorSubject<ComicDataWrapper>(
    {} as ComicDataWrapper
  );
  private allComics$: Observable<ComicDataWrapper> =
    this.allComics.asObservable();

  constructor(private http: HttpClient) {
    const url = this.createURL('comics');
    this.http.get(url).subscribe((data) => {
      this.allComics.next(data as ComicDataWrapper);
    });
  }

  private createURL(path: string) {
    const ts = Date.now();
    const params = new URLSearchParams({
      ts: ts.toString(),
      apikey: this.publicKey,
      hash: Md5.md5(ts + this.privateKey + this.publicKey),
    }).toString();
    const endpoint = `${this.apiUrl}${path}?`;

    return endpoint + params;
  }

  getComics(): Observable<ComicDataWrapper> {
    return this.allComics$;
  }
}
