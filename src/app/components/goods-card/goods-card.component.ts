import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Goods } from '@models/goods';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsCardComponent {
  @Input() good: Goods;

  constructor() { }

}
