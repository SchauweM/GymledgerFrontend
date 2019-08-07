import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-injury',
  templateUrl: './injury.component.html',
  styleUrls: ['./injury.component.css']
})
export class InjuryComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
