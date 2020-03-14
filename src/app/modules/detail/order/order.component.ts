import { DialogService } from '@services/dialog';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {
  order$: Observable<object | null>;
  totalPrice$: Observable<number>;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.order$ = this.dialogService.getDialogData();
  }

  // 商品数量
  handelCounterchange(count: number): void { }

}
