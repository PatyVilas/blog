import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map }  from 'rxjs/operators'
import { Entry } from '../interfaces/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private httpClient: HttpClient) { }

  public recoverEntries(): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>('assets/json/entries.json')
  }

  public recoverEntry(id:number): Observable<Entry> {
    return this.httpClient.get<Entry[]>('assets/json/entries.json').pipe(
      map((entries: Entry[]) => {

        let entry: Entry = {
          id: 0,
          author: '',
          date: '',
          body: '',
          title: '',
          userId: 0, 
          photo: ''
        }
        entries.forEach((entryList: Entry) => {
          if (entryList.id === id) {
            entry === entryList;
          }
        })
        return entry;
      })
    )

  }
}
