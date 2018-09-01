import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  cards$ = this.store.select('browse', 'cards');

  constructor(
    private store: Store<any>
  ) { }

}
