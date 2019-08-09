import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gymnast } from '../models/gymnast.model';

@Component({
  selector: 'app-add-gymnast',
  templateUrl: './add-gymnast.component.html',
  styleUrls: ['./add-gymnast.component.css']
})
export class AddGymnastComponent implements OnInit {
  @Output() public newGymnast = new EventEmitter<Gymnast>();
  constructor() { }

  ngOnInit() {
  }

  addGymnast(gymnastName: HTMLInputElement): boolean {
    const gymnast = new Gymnast(gymnastName.value, "pieters", new Date(),"jan.pieters@hot.com", [])
    this.newGymnast.emit(gymnast);
    return false;
  }

}
