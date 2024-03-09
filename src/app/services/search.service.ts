import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuerySubject = new Subject<string>();
  searchQuery$ = this.searchQuerySubject.asObservable();

  constructor() {}

  search(query: string) {
    this.searchQuerySubject.next(query);
  }
}
