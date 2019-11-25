import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FilmListComponent} from './films/film-list/film-list.component';
import {FilmCreateComponent} from './films/film-create/film-create.component';

const routes: Routes = [
  {path: '', component: FilmListComponent},
  {path: 'film-create', component: FilmCreateComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
