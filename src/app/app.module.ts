import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GymnastComponent } from './components/gymnast/gymnast.component';
import { InjuryComponent } from './components/injury/injury.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
 import { FlexLayoutModule } from '@angular/flex-layout';
import { AddInjuryComponent } from './add-injury/add-injury.component';
 

@NgModule({
  declarations: [
    AppComponent,
    GymnastComponent,
    InjuryComponent,
    AddInjuryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     FlexLayoutModule,
     MatListModule,
     MatCardModule,
     MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
