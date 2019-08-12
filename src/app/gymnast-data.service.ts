import { Injectable } from '@angular/core';
import { Gymnast } from './models/gymnast.model';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

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

  addNewGymnast(gymnast: Gymnast){
    return this.http.post(`${environment.apiUrl}/gymnast/`, gymnast.toJson);
  }
}
