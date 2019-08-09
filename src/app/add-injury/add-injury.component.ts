import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injury } from '../models/injury.model';

@Component({
  selector: 'app-add-injury',
  templateUrl: './add-injury.component.html',
  styleUrls: ['./add-injury.component.css']
})
export class AddInjuryComponent implements OnInit {
  @Output() public newInjury = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addInjury(newInjury: HTMLInputElement): boolean {
    const injury = newInjury.value;
    this.newInjury.emit(injury);
    return false;
  }

}
