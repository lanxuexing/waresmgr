import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoUnsubscribe } from '@decorators/rxjs';
import { ScrollableTab } from '@models/scrollable-tab';
import { HomeService } from '@services/home';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@AutoUnsubscribe()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  scrollableTab: ScrollableTab[] = [];
  selectedTabLink$: Observable<string>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
  }

  ngOnInit(): void {
    this.homeService.getScrollTabData().subscribe(banners => {
      this.scrollableTab = banners;
    });
  }

  // 滚动菜单点击事件
  onScrollableTabSelectChange(topMenu: ScrollableTab): void {
    this.router.navigate(['home', topMenu.link]);
  }


  ngOnDestroy(): void { }

}
