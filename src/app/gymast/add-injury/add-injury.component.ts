import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injury } from '../injury.model';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { NoteDay } from '../noteDay.model';

@Component({
  selector: 'app-add-injury',
  templateUrl: './add-injury.component.html',
  styleUrls: ['./add-injury.component.css']
})
export class AddInjuryComponent implements OnInit {
  @Output() public newInjury = new EventEmitter<Injury>();
  public injury: FormGroup;
  

  constructor(private _fb: FormBuilder){ }

  ngOnInit() {
    this.injury = this._fb.group({
      bodyPart: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      currentScaleOfPain: [''],
      startDate: [''],
      endDate: [''],
      notePerDay: this._fb.array([ this.createNote() ])
    });
  }

  createNote(): FormGroup {
    return this._fb.group({
      note: [''],
      day: ['']
    });
  }
  

  onSubmit() {
    let notes = this.injury.value.notePerDay.map(NoteDay.fromJson);
    notes = notes.filter(n => n.note.length > 2);
    this.newInjury.emit(new Injury(this.injury.value.bodyPart, this.injury.value.currentScaleOfPain
      , this.injury.value.description , this.injury.value.startDate, this.injury.value.endDate, notes));
      
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
        characters (got ${errors.minlength.actualLength})`;
    }
  }

  get injuries(): FormArray {
    return <FormArray>this.injuries.get('notes');
  }
}
