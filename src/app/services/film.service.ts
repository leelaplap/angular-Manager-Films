import {Injectable} from '@angular/core';
import {IFilm} from '../films/ifilm';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  listFilm: IFilm[] = [
    {
      name: 'Hai Phượng',
      category: 'action',
      image: 'assets/images/films/tanh1.jpg',
      star: 4,
    },
    {
      name: 'Cam Bẫy',
      category: 'action',
      image: 'assets/images/films/tanh2.jpg',
      star: 2.5
    },
    {
      name: 'Người la ơi',
      category: 'music',
      image: 'assets/images/films/tanh3.jpg',
      star: 1.5,
    },
  ];

  constructor() {
  }

  getAll() {
    return this.listFilm;
  }

  add(film) {
    this.listFilm.push(film);
  }
}
