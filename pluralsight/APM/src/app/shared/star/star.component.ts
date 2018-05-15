import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating:number;
  @Output() notifyStarClicked : EventEmitter<string> = new EventEmitter<string>();
  starWidth:number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }

  onClick(): void {
    this.notifyStarClicked.emit(`The rating ${this.rating} clicked!`);
  }
}
