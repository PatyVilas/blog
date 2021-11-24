import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/shared/interfaces/entry';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit {

  public listEntries: Entry[];

  constructor() {
    this.listEntries = [
      {
        title: 'Introduction to Angular',
        summary: 'In this lesson we will make a short introduction to Angular'
      },
      {
        title: 'Typescript language for Angular',
        summary: 'Short tour of the Typescript language as a basis for Angular'
      },
      {
        title: 'Components in Angular',
        summary: 'You will learn to use the components in Angular'
      },
    ]
   }

  ngOnInit(): void {
  }

}
