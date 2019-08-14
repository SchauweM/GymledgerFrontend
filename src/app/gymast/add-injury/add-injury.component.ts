import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injury } from '../injury.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-injury',
  templateUrl: './add-injury.component.html',
  styleUrls: ['./add-injury.component.css']
})
export class AddInjuryComponent implements OnInit {
  @Output() public newInjury = new EventEmitter<Injury>();
  public injury: FormGroup;


  ngOnInit() {
    this.injury = new FormGroup({
      name: new FormControl('Voet') 
    })
  }

  onSubmit() {
   this.newInjury.emit(new Injury(this.injury.value.name, 5,"Overbelasting", new Date(2017,8,8), null, "test"));
  }
}
