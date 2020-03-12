import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Tabs } from '@models/tabs';
import { HomeService } from '@services/home';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tabs: Tabs[] = [];
  selectedIndex$: Observable<number>;

  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
    this.selectedIndex$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(path => this.getSelectedIndex(path))
    );
  }

  ngOnInit(): void {
    this.tabs = this.homeService.getTabsData();
  }

  // 底部菜单点击事件
  handleTabSelected(tab: Tabs): void {
    this.router.navigate([tab.link]);
  }

  // 根据路由地址动态分配菜单
  getSelectedIndex(tab: string): number {
    return tab === 'recommend'
      ? 1
      : tab === 'category'
      ? 2
      : tab === 'chat'
      ? 3
      : tab === 'my'
      ? 4
      : 0;
  }

}
