import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoUnsubscribe } from '@decorators/rxjs';
import { ScrollableTab } from '@models/scrollable-tab';
import { HomeService } from '@services/home';

@AutoUnsubscribe()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  scrollableTab: ScrollableTab[] = [];

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getScrollTabData().subscribe(banners => {
      this.scrollableTab = banners;
    });
  }

  // 滚动菜单点击事件
  onScrollableTabSelectChange(topMenu: ScrollableTab): void {
    console.log('菜单点击了...', topMenu);
    this.router.navigate(['home', topMenu.link]);
  }


  ngOnDestroy(): void { }

}
