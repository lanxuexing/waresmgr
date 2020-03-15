import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Detail } from '@models/detail';
import { Payment } from '@models/payment';
import { DetailService } from '@services/detail';
import { DialogService } from '@services/dialog';
import { combineLatest, merge, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

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
  payments: Payment[];

  constructor(
    private dialogService: DialogService,
    private detailService: DetailService
  ) { }

  ngOnInit(): void {
    this.payments = this.detailService.getPaymentData();
    this.order$ = this.dialogService.getDialogData();
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

  // 立即支付
  handlePay(): void {
    console.log('🎉🎉🎉立即支付～');
  }

}
