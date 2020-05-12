import { Component } from '@angular/core';
import { Gymnast } from './gymast/gymnast.model';
import { GymnastDataService } from './gymast/gymnast-data.service';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';
import { Injury } from './gymast/injury.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  

}
