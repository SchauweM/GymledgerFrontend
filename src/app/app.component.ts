import { Component } from '@angular/core';
import { Gymnast } from './gymast/gymnast.model';
import { GymnastDataService } from './gymast/gymnast-data.service';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';
import { Injury } from './gymast/injury.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filterInjuryName: string;
  public filterInjuries$ = new Subject<string>();

  private _fetchGymnast$: Observable<Gymnast[]> = this._gymnastDataService.gymasts$;
  private _fetchInjuries$: Observable<Injury[]> = this._gymnastDataService.injuries$;
  
  public loadingErrors$ = this._gymnastDataService.loadingError$;

  constructor(private _gymnastDataService: GymnastDataService){
    this.filterInjuries$
    .pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map(val => val.toLowerCase()),
      filter(val => !val.startsWith('s'))
    )
    .subscribe(val => (this.filterInjuryName = val));
  }
  

  get gymnasts$() : Observable<Gymnast[]>{
    return this._fetchGymnast$;
  }

  get injuries$() : Observable<Injury[]>{
    return this._fetchInjuries$;
  }

  applyFilter(filter: string){
    this.filterInjuryName = filter;
  }

  addNewInjury(injury: Injury) {
    this._gymnastDataService.addNewInjury(injury).subscribe();
  }
  
  

}
