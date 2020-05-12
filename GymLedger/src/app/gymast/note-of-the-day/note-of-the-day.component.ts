import { Component, OnInit, Input } from '@angular/core';
import { NoteDay } from '../noteDay.model';

@Component({
  selector: 'app-note-of-the-day',
  templateUrl: './note-of-the-day.component.html',
  styleUrls: ['./note-of-the-day.component.css']
})
export class NoteOfTheDayComponent implements OnInit {
  @Input() noteOfTheDay: NoteDay;
  constructor() { }

  ngOnInit() {
  }

}
