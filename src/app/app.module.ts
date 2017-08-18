import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PosterListComponent } from './posters/poster.component';
import { ClubListComponent } from './clubs/club.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BasicComponent }  from './app.component';

const appRoutes: Routes = [{ 
	path: '', redirectTo: 'posters', pathMatch: 'full' }, {
  	path: 'clubs' , component: ClubListComponent }, {
  	path: 'posters' , component: PosterListComponent}]

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [ BasicComponent, ClubListComponent, PosterListComponent ],
  bootstrap:    [ BasicComponent ]
})
export class AppModule { }
