import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { ListEntriesComponent } from './components/list-entries/list-entries.component';
import { EntryComponent } from './components/list-entries/entry/entry.component';


@NgModule({
  declarations: [
    MenuComponent,
    ListEntriesComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MenuComponent,
    ListEntriesComponent,
    EntryComponent
  ]
})
export class SharedModule { }
