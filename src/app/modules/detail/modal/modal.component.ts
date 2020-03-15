import { DialogService } from '@services/dialog';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Detail } from '@models/detail';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {
  @Input() detail: Detail[];
  @Input() selectedIndex = 0;
  @Output() selected = new EventEmitter<number>();
  @Output() formSubmitted = new EventEmitter<{detail: Detail, count: number}>();
  counter = 0;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  // 计算属性，当前选中的索引
  get price(): number {
    if (this.selectedIndex < 0 || this.detail.length === 0) {
      return 0;
    }
    return this.detail[this.selectedIndex].price;
  }

  // 计算属性，当前选择的图片
  get selectedImage(): string {
    return this.detail[this.selectedIndex].goodsSpecsImage[0].imgUrl;
  }

  // 计算属性，当前选择的规格
  get selectedName(): string {
    return this.detail[this.selectedIndex].name;
  }

  // 切换套餐
  handleSelected(index: number): void {
    this.selectedIndex = index;
    this.selected.emit(index);
  }

  // 计数器，商品数量
  handleCounterChange(goodsNum: number): void {
    this.counter = goodsNum;
  }

  // 确认
  handleConfirm(): void {
    if (this.selectedIndex < 0 || this.detail.length === 0) {
      return;
    }
    this.formSubmitted.emit({
      detail: this.detail[this.selectedIndex],
      count: this.counter
    });
    this.dialogService.closeDialog();
  }

}
