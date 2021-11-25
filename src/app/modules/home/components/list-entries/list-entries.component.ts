import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Entry } from 'src/app/shared/interfaces/entry';
import { EntryService } from './../../../../shared/services/entry.service';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit {

  public listEntries: Entry[];

  constructor(private entryService: EntryService, private router: Router) {
    this.listEntries = []
   }

  ngOnInit(): void {
    this.toListEntries();
  }

  private toListEntries(): void {
    this.entryService.recoverEntries().subscribe((entries: Entry[]) => {
      this.listEntries = [...entries]
    },
      (error: Error) => {
      console.log('Error:', error);
      },
      () => {
      console.log('Response ok');
    })
  }

  public showEntry(id: number): void {
    this.router.navigate([`entry-detail/:${id}`]);
  }
}
