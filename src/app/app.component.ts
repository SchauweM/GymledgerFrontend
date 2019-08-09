import { Component } from '@angular/core';
import { GYMNASTS } from "./mock-gymnasts";
import { Gymnast } from './models/gymnast.model';
import { GymnastDataService } from './gymnast-data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filterGymnastName: string;
  public filterGymnast$ = new Subject<string>();

  constructor(private _gymnastDataService: GymnastDataService){
    this.filterGymnast$.subscribe(
      val => this.filterGymnastName = val);
  }
  

  get gymnasts() : Gymnast[]{
    return this._gymnastDataService.gymasts;
  }

  applyFilter(filter: string){
    this.filterGymnastName = filter;
  }
  
  public addGymnast(gymnast: Gymnast){
    this._gymnastDataService.addNewGymnast(gymnast)
  }

}
