import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-goods-amount',
  templateUrl: './goods-amount.component.html',
  styleUrls: ['./goods-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsAmountComponent {
  @Input() counter = 0; // 计数器，商品数量
  @Output() counterchange = new EventEmitter<number>(); // +/-

  constructor() { }

  // 增加
  handleIncrease(): void {
    this.counter++;
    this.counterchange.emit(this.counter);
  }

  // 减少
  handleDecrease(): void {
    if (this.counter <= 0) { return; }
    this.counter--;
    this.counterchange.emit(this.counter);
  }

}
