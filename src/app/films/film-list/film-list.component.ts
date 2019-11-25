import {Component, OnInit} from '@angular/core';
import {IFilm} from '../ifilm';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films = this.fs.getAll();
  showImg = true;
  listFilms: IFilm[] = [];
  showMess: string;

  constructor(private fs: FilmService) {
  }

  ngOnInit() {
    this.listFilms = this.films;
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


  showImage() {
    this.showImg = !this.showImg;
  }

  delete(id) {
    this.films.splice(id, 1);
  }

  showMessage(event) {
    this.showMess = event;
  }

}
