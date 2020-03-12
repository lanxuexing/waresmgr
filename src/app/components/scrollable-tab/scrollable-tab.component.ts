import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ScrollableTab } from '@models/scrollable-tab';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent {
  @Input() backgroundColor = 'white'; // 背景色
  @Input() titleColor = 'black'; // 文字的默认颜色
  @Input() titleActiveColor = 'red'; // 选中时候的文字颜色
  @Input() indicatorColor = 'black'; // 指示器默认颜色
  @Input() indicatorActiveColor = 'red'; // 指示器默认颜色
  @Input() selectIndex = 0; // 当前选中菜单
  @Input() menus: ScrollableTab[] = []; // 菜单源数据
  @Output() selectChange: EventEmitter<ScrollableTab> = new EventEmitter(); // 菜单选中数据

  constructor() { }

  // 监听菜单选中事件
  onSelect(item: ScrollableTab, index: number): void {
    this.selectIndex = index;
    this.selectChange.emit(item);
  }

}
