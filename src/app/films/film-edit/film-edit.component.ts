import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss']
})
export class FilmEditComponent implements OnInit {
  updateFilmForm: FormGroup;
  index = +this.activeRoute.snapshot.paramMap.get('id');


  constructor(private activeRoute: ActivatedRoute,
              private filmService: FilmService,
              private fb: FormBuilder,
              private router: Router
  ) {
  }

  ngOnInit() {
    const film = this.filmService.getFilmById(this.index);
    this.updateFilmForm = this.fb.group({
      name: [film.name, [Validators.required]],
      category: [film.category, [Validators.required]],
      star: [film.star, [Validators.required]],
    });
  }

  submit() {
    // @ts-ignore
    this.filmService.update(this.updateFilmForm.value, this.index);
    return this.router.navigate(['/']);
  }

  get name() {
    return this.updateFilmForm.get('name');
  }

  get category() {
    return this.updateFilmForm.get('category');
  }

  get star() {
    return this.updateFilmForm.get('star');
  }

}
