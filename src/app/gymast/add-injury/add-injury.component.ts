import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injury } from '../injury.model';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { NoteDay } from '../noteDay.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GymnastDataService } from '../gymnast-data.service';

function validateNote(control: FormGroup)
  : { [key: string]: any } {
    if (
      control.get('note').value.length >= 1 &&
      control.get('day').value > new Date()
    ) {
      return { noteDate: true };
    }
  return null;
}

@Component({
  selector: 'app-add-injury',
  templateUrl: './add-injury.component.html',
  styleUrls: ['./add-injury.component.css']
})



export class AddInjuryComponent implements OnInit {
  @Output() public newInjury = new EventEmitter<Injury>();
  public injury: FormGroup;
  private _gymnastDataService: GymnastDataService;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.injury = this._fb.group({
      bodyPart: [''],
      description: [''],
      currentScaleOfPain: [''],
      startDate: [''],
      endDate: [''],
      notePerDay: this._fb.array([this.createNote()])
    });

    this.notePerDay.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(ingList => {
        const lastElement = ingList[ingList.length - 1];
        if (lastElement.note && lastElement.note.length > 2) {
          this.notePerDay.push(this.createNote());
        } else if (ingList.length >= 2) {
          const secondToLast = ingList[ingList.length - 2];
          if (
            !lastElement.note &&
            !lastElement.day &&
            (!secondToLast.note || secondToLast.note.length < 2)
          ) {
            this.notePerDay.removeAt(this.notePerDay.length - 1);
          }
        }
      });


  }

  createNote(): FormGroup {
    return this._fb.group({
      note: [''],
      day: ['']
    },
      { validator: validateNote }
    );
  }


  onSubmit() {
    let notes = this.injury.value.notePerDay.map(NoteDay.fromJson);
    notes = notes.filter(n => n.note.length > 2);
    this._gymnastDataService.addNewInjury(new Injury(this.injury.value.bodyPart, this.injury.value.currentScaleOfPain
      , this.injury.value.description, this.injury.value.startDate, this.injury.value.endDate, notes))
      .subscribe();
    
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
        characters (got ${errors.minlength.actualLength})`;
    } else if (errors.noteDate) {
      return `if amount is set the date can't be in the future`;
    }
  }


  get notePerDay(): FormArray {
    return <FormArray>this.injury.get('notePerDay');
  }
}
