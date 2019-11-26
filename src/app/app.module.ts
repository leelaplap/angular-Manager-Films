import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmListComponent } from './films/film-list/film-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FilmCreateComponent } from './films/film-create/film-create.component';
import { StarsComponent } from './stars/stars.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { FilmEditComponent } from './films/film-edit/film-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    MenuComponent,
    FilmCreateComponent,
    StarsComponent,
    FilmEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
