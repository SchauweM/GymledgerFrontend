import { Component } from '@angular/core';
import { GYMNASTS } from "./mock-gymnasts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gymnasts = GYMNASTS;
  title = 'GymLedger';
  constructor(){}
}
