import { Injectable } from '@angular/core';
import { GYMNASTS } from './mock-gymnasts';
import { Gymnast } from './models/gymnast.model';

@Injectable({
  providedIn: 'root'
})
export class GymnastDataService {
  private _gymnasts = GYMNASTS;


  constructor(){}

  get gymasts(): Gymnast[]{
    return this._gymnasts
  }

  addNewGymnast(gymnast : Gymnast){
    this._gymnasts = [...this._gymnasts, gymnast];
  }
  
}
