import { Action } from '@ngrx/store';

import { SearchModel } from '../search/search.model';

export enum BrowseActionTypes {
  SearchAction = '[Search] Search Action',
  CardsLoadedAction = '[Browse Effects] Cards Loaded Action',
}

export class Search implements Action {
  readonly type = BrowseActionTypes.SearchAction;

  constructor(public payload: SearchModel) { }
}

export class CardsLoaded implements Action {
  readonly type = BrowseActionTypes.CardsLoadedAction;

  constructor(public payload: any[]) { }
}

export type BrowseActions = Search | CardsLoaded;
