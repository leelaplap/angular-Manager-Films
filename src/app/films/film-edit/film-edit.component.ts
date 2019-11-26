import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
  }

}
