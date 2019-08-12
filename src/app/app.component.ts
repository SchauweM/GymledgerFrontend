import { Component } from '@angular/core';
import { Gymnast } from './models/gymnast.model';
import { GymnastDataService } from './gymnast-data.service';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filterGymnastName: string;
  public filterGymnast$ = new Subject<string>();

  private _fetchGymnast$: Observable<Gymnast[]> = this._gymnastDataService.gymasts$;
  public loadingErrors$ = this._gymnastDataService.loadingError$;

  constructor(private _gymnastDataService: GymnastDataService){
    this.filterGymnast$
    .pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map(val => val.toLowerCase()),
      filter(val => !val.startsWith('s'))
    )
    .subscribe(val => (this.filterGymnastName = val));
  }
  

  get gymnasts$() : Observable<Gymnast[]>{
    return this._fetchGymnast$;
  }

  applyFilter(filter: string){
    this.filterGymnastName = filter;
  }

  addNewGymnast(gymnast) {
    this._gymnastDataService.addNewGymnast(gymnast).subscribe();
  }
  
  

}
