import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GymnastComponent } from './components/gymnast/gymnast.component';
import { InjuryComponent } from './components/injury/injury.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddInjuryComponent } from './add-injury/add-injury.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule } 
from '@angular/material';
import { AddGymnastComponent } from './add-gymnast/add-gymnast.component';
import { TeamComponent } from './team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { GymnastFilterPipe } from './gymnast-filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 

@NgModule({
  declarations: [
    AppComponent,
    GymnastComponent,
    InjuryComponent,
    AddInjuryComponent,
    AddGymnastComponent,
    TeamComponent,
    GymnastFilterPipe
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
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
