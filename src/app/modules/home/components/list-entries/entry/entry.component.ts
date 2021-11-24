import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/shared/interfaces/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  public entry: Entry;

  constructor() { 
    this.entry = {
      title:'',
      summary: ''
    }
  }

  ngOnInit(): void {
  }

}