import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Search } from '../store/browse.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search$ = this.store.select('browse', 'search');

  constructor(
    private store: Store<any>
  ) { }

  dispatchSearch(name: string) {
    this.store.dispatch(new Search({ name }));
  }

  ngOnInit() {
    this.store.dispatch(new Search({ name: 'azami' }));
  }

}
