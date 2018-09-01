import { SearchModel } from '../search/search.model';
import { BrowseActions, BrowseActionTypes } from './browse.actions';

export interface BrowseState {
  search: SearchModel;
  cards: any[];
}

export const initialState: BrowseState = {
  search: { name: '' },
  cards: []
};

export function browseReducer(state = initialState, action: BrowseActions): BrowseState {
  switch (action.type) {
    case BrowseActionTypes.SearchAction:
      return {
        ...state,
        search: action.payload
      };

    case BrowseActionTypes.CardsLoadedAction:
      return {
        ...state,
        cards: action.payload
      };

    default:
      return state;
  }
}
