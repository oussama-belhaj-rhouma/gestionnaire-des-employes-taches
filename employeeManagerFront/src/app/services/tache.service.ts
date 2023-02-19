import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../models/Tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient){}

  public getTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>('http://localhost:8080/tache/all');
  }

  public addTache( e: Tache): Observable<Tache>{
      return this.http.post<Tache>('http://localhost:8080/tache/add', e);
  }
  public updateTache( e: Tache): Observable<Tache>{
      return this.http.put<Tache>('http://localhost:8080/tache/update', e);
  }
  public deleteTache( id : number): Observable<void> {
      return this.http.delete<void>(`http://localhost:8080/tache/delete/${id}`);
  }
}


