import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryDetailRoutingModule } from './entry-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntryDetailComponent } from './page/entry-detail.component';


@NgModule({
  declarations: [
    EntryDetailComponent
  ],
  imports: [
    CommonModule,
    EntryDetailRoutingModule,
    SharedModule
  ]
})
export class EntryDetailModule { }
