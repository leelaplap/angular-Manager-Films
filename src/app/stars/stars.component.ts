import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() star: number;
  widthStar: number;
  @Output() message = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.widthStar = this.star * 75 / 5;
  }

  click() {
    this.message.emit('Phim này được đánh giá ' + this.star + ' sao');
  }

}
