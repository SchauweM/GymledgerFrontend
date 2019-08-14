import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GymnastComponent } from './gymast/gymnast/gymnast.component';
import { InjuryComponent } from './gymast/injury/injury.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddInjuryComponent } from './gymast/add-injury/add-injury.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule } 
from '@angular/material';
import { AddGymnastComponent } from './gymast/add-gymnast/add-gymnast.component';
import { TeamComponent } from './team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { GymnastFilterPipe } from './gymast/gymnast-filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { InjuryFilterPipe } from './gymast/injury-filter.pipe';
import { NoteOfTheDayComponent } from './gymast/note-of-the-day/note-of-the-day.component';


@NgModule({
  declarations: [
    AppComponent,
    GymnastComponent,
    InjuryComponent,
    AddInjuryComponent,
    AddGymnastComponent,
    TeamComponent,
    GymnastFilterPipe,
    InjuryFilterPipe,
    NoteOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
