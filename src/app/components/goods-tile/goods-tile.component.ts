import { Component, Input } from '@angular/core';
import { Goods } from '@models/goods';

@Component({
  selector: 'app-goods-tile',
  templateUrl: './goods-tile.component.html',
  styleUrls: ['./goods-tile.component.scss']
})
export class GoodsTileComponent {
  @Input() good: Goods;

  constructor() { }

}
