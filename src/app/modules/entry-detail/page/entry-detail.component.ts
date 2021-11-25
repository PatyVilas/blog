import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entry } from 'src/app/shared/interfaces/entry';
import { EntryService } from './../../../shared/services/entry.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  //atributes
  private id: number;
  public entry: Entry;

  constructor(private activateRoute: ActivatedRoute, private entryService: EntryService) {
    this.id = 0;
    this.entry = {
      id: 0,
      userId: 0,
      title: '',
      body: '',
      author: '',
      photo: '',
      date: ''
    }

    this.activateRoute.params.subscribe(paramsUrl => {
      this.id = +paramsUrl.id;
    })
   }

  ngOnInit(): void {
    this.recoverEntry();
  }

  private recoverEntry(): void {
    this.entryService.recoverEntry(this.id).subscribe(
      (data: Entry) => {
        this.entry = data;
      }
    )
  }

}
