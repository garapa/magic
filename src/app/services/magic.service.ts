import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CardFilter } from './magic.model';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  private endpoint = 'https://api.magicthegathering.io/v1';

  constructor(
    private httpClient: HttpClient
  ) { }

  find(id: string) {
    return this.httpClient.get(`${this.endpoint}/cards/${id}`);
  }

  where(filter: CardFilter): Observable<any[]> {
    const params = new HttpParams({ fromObject: filter as {} });
    return this.httpClient.get(`${this.endpoint}/cards`, { params })
      .pipe(
        map((result: any) => result.cards),
        map(this.groupByName),
    );
  }

  private groupByName(cards: any[]): any[] {
    const reducer = (accumutator: any[], currentValue: any) => {
      const sameNameCard = accumutator.find(card => card.name === currentValue.name);
      if (sameNameCard) {
        sameNameCard.versions = sameNameCard.versions || [];
        sameNameCard.versions.push(currentValue);
      } else {
        accumutator.push(currentValue);
      }

      return accumutator;
    };

    return cards.reduce(reducer, []);
  }
}
