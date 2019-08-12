import { Component, OnInit, Input } from '@angular/core';
import { Injury } from 'src/app/models/injury.model';

@Component({
  selector: 'app-injury',
  templateUrl: './injury.component.html',
  styleUrls: ['./injury.component.css']
})
export class InjuryComponent implements OnInit {
  @Input() injury: Injury;
  constructor() { }

  ngOnInit() {
  }

}
