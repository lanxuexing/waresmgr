import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollableTab } from '@models/index';
import { HomeService } from '@services/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scrollableTab: ScrollableTab[] = [];

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.scrollableTab = this.homeService.getScrollTabData();
  }

  // 滚动菜单点击事件
  onScrollableTabSelectChange(topMenu: ScrollableTab) {
    console.log('菜单点击了...', topMenu);
    this.router.navigate(['home', topMenu.link]);
  }

}
