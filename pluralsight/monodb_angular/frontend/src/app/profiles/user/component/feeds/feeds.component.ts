import { Component, OnInit, Input } from '@angular/core';

import { IFeed } from '../../../../models/feeds.model';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {
  @Input() feeds: IFeed;
  constructor() { }

  ngOnInit() {
  }

}
