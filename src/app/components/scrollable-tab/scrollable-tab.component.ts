import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScrollableTab } from '@models/index';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent {
  @Input() selectIndex: number = 0; // 当前选中菜单
  @Input() menus: ScrollableTab[] = []; // 菜单源数据
  @Output() selectChange: EventEmitter<{data: ScrollableTab, selected: number}> = new EventEmitter(); // 菜单选中数据

  constructor() { }

  // 监听菜单选中事件
  onSelect(item: ScrollableTab, index: number): void {
    this.selectIndex = index;
    this.selectChange.emit({
      data: item,
      selected: index
    });
  }

}
