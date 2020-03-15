import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Payment } from '@models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  @Input() payments: Payment[] = [];
  @Output() paymentSelected = new EventEmitter<Payment>();
  selectedId = 1;

  constructor() { }

  handleSelection(payment: Payment) {
    this.selectedId = payment.id;
    this.paymentSelected.emit(payment);
  }

}
