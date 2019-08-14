import { Component, OnInit, Input } from '@angular/core';
import { Gymnast } from 'src/app/gymast/gymnast.model';

@Component({
  selector: 'app-gymnast',
  templateUrl: './gymnast.component.html',
  styleUrls: ['./gymnast.component.css']
})
export class GymnastComponent implements OnInit {
  @Input() public gymnast: Gymnast;
  constructor() {
   }

  ngOnInit() {
  }

}
