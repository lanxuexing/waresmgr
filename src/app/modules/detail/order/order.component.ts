import { Detail } from '@models/detail';
import { DialogService } from '@services/dialog';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, combineLatest, merge } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {
  order$: Observable<object | null>;
  totalPrice$: Observable<number>;
  count$ = new Subject<number>();

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.order$ = this.dialogService.getDialogData().pipe(
      share()
    );
    // 单价
    const unitPrice$ = this.order$.pipe(
      map((item: {detail: Detail, count: number}) => item.detail.price)
    );
    // 数量
    const amount$ = this.order$.pipe(
      map((item: {detail: Detail, count: number}) => item.count)
    );
    const mergeCount$ = merge(amount$, this.count$);
    // 总价
    this.totalPrice$ = combineLatest([unitPrice$, mergeCount$]).pipe(
      map(([price, amount]) => price * amount)
    );
  }

  // 商品数量
  handelCounterchange(count: number): void {
    this.count$.next(count);
  }

}
