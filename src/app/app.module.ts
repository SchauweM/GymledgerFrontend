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
import { InjuryListComponent } from './injury-list/injury-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'injury-list', component: InjuryComponent},
  { path: 'add-injury', component: AddInjuryComponent },
  { path: '', redirectTo: 'recipe-list', pathMatch: 'full'},

];

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
    NoteOfTheDayComponent,
    InjuryListComponent,
    MainNavComponent,
    PageNotFoundComponent
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
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
