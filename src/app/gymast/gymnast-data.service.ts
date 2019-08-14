import { Injectable } from '@angular/core';
import { Gymnast } from './gymnast.model';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Injury } from './injury.model';

@Injectable({
  providedIn: 'root'
})
export class GymnastDataService {
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  get gymasts$(): Observable<Gymnast[]> {
    return this.http.get(`${environment.apiUrl}/gymnast`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map(
        (list: any[]): Gymnast[] => list.map(Gymnast.fromJSON)
      )
    );
  }

  get injuries$(): Observable<Injury[]>{
    return this.http.get(`${environment.apiUrl}/gymnast/6/injuries`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map(
        (list: any[]): Injury[] => list.map(Injury.fromJson)
      )
    );
  }

  addNewInjury(injury: Injury){
    return this.http.post(`${environment.apiUrl}/gymnast/6/injuries/`, injury.toJson());
  }
}
