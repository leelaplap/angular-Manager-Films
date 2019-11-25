import {Component, OnInit} from '@angular/core';
import {IFilm} from '../ifilm';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films = this.filmServices.getAll();
  showImg = true;
  listFilms: IFilm[] = [];
  showMess: string;


  constructor(private filmServices: FilmService) {
  }

  ngOnInit() {
    this.listFilms = this.films;
  }

  showImage() {
    this.showImg = !this.showImg;
  }

  filter(event) {
    const data = event.target.value;
    this.listFilms = (data) ? this.search(data) : this.films;
  }

  search(data) {
    return this.films.filter(
      film => film.name.toLowerCase().indexOf(data) !== -1
    );
  }

  delete(id) {
    this.films.splice(id, 1);
  }

  showMessage(event) {
    this.showMess = event;
  }

}
