import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FilmService} from '../../services/film.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.scss']
})
export class FilmCreateComponent implements OnInit {
  submitted = false;
  addFilmForm = this.fb.group({
    name: ['', [Validators.required]],
    category: ['', [Validators.required]],
    star: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private fs: FilmService,
              private router: Router,
  ) {
  }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
    const data = this.addFilmForm.value;
    this.fs.add(data);
    this.router.navigate(['']);
  }

  get name() {
    return this.addFilmForm.get('name');
  }

  get category() {
    return this.addFilmForm.get('category');
  }

  get star() {
    return this.addFilmForm.get('star');
  }
}
