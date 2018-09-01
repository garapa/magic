import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse/browse.component';
import { DetailComponent } from './result/detail/detail.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { BrowseStoreModule } from './store/browse-store.module';
import { CardComponent } from './result/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    BrowseRoutingModule,
    BrowseStoreModule
  ],
  declarations: [
    BrowseComponent,
    ResultComponent,
    DetailComponent,
    SearchComponent,
    CardComponent
  ]
})
export class BrowseModule { }