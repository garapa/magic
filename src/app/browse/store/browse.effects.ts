import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { MagicService } from '../../services/magic.service';
import { BrowseActionTypes, CardsLoaded, Search } from './browse.actions';

@Injectable()
export class BrowseEffects {

  @Effect()
  loadCourse$ = this.actions$
    .pipe(
      ofType<Search>(BrowseActionTypes.SearchAction),
      switchMap(action => this.magicService.where(action.payload)),
      map(result => new CardsLoaded(result))
  );

  constructor(
    private actions$: Actions,
    private magicService: MagicService
  ) { }

}
