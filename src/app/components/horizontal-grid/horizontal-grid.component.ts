import { Component, OnInit } from '@angular/core';
import { Emoji } from '@decorators/emoji';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {
  @Emoji()
  title = 'horizontal-grid works!';

  constructor() { }

  ngOnInit() {
  }

}
