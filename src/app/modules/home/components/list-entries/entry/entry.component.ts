import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Entry } from 'src/app/shared/interfaces/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  public entry: Entry;
  @Output()
  public onDoEvent: EventEmitter<number>;

  constructor() { 
    this.entry = {
      id: 1,
      userId: 1,
      title:'',
      body: '',
      author: '',
      date: '',
      photo:''
    }
    this.onDoEvent = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public doEvent(): void {
    this.onDoEvent.emit(this.entry.id)
  }

}