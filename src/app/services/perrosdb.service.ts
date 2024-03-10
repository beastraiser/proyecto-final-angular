import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerrosService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getRazas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/razas`);
  }

  getImagen(raza: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/imagen/${raza}`);
  }
}
