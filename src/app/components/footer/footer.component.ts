import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Tabs } from '@models/tabs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input() selectedIndex = 0;
  @Input() tabItems: Tabs[] = [];
  @Output() tabSelected = new EventEmitter<Tabs>();

  constructor() { }

  // 底部Tabs点击事件
  toggleSelectedIndex(tab: Tabs, index: number): void {
    this.selectedIndex = index;
    this.tabSelected.emit(tab);
  }

}
