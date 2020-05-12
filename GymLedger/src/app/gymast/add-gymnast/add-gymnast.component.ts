import { Component, OnInit } from '@angular/core';
import { Gymnast } from '../gymnast.model';

@Component({
  selector: 'app-add-gymnast',
  templateUrl: './add-gymnast.component.html',
  styleUrls: ['./add-gymnast.component.css']
})
export class AddGymnastComponent implements OnInit {
  public gymnast: Gymnast;
  constructor() { }

  ngOnInit() {
  }

}
