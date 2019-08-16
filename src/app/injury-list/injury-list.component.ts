import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { GymnastDataService } from '../gymast/gymnast-data.service';
import { Injury } from '../gymast/injury.model';
import { Gymnast } from '../gymast/gymnast.model';

@Component({
  selector: 'app-injury-list',
  templateUrl: './injury-list.component.html',
  styleUrls: ['./injury-list.component.css']
})

export class InjuryListComponent {
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
      map(val => val.toLowerCase())
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
