import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoUnsubscribe } from '@decorators/rxjs';
import { Carousel } from '@models/carousel';
import { HorizontalGrid } from '@models/horizontal-grid';
import { HomeService } from '@services/home';
import { Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';
import { Ad } from '@models/ad';
import { Goods } from '@models/goods';

@AutoUnsubscribe()
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  banners$: Observable<Carousel[]>;
  channels$: Observable<HorizontalGrid[]>;
  selectedTabLink$: Observable<string>; // 当前选中的TopMenuLink
  timeHourglassTitle = '距离拼团结束时间';
  effectiveDate = new Date('2020-03-11');
  expiredDate = new Date('2020-03-12');
  ad$: Observable<Ad>; // 广告
  goods$: Observable<Goods[]>; // 商品

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      map(params => params.get('tabLink'))
    );
  }

  ngOnInit(): void {
    this.banners$ = this.homeService.getBannerData();
    this.channels$ = this.homeService.getHorizontalGridData();
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tabLink => this.homeService.getAdData(tabLink)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );
    this.goods$ = this.selectedTabLink$.pipe(
      switchMap(tabLink => this.homeService.getGoodsData(tabLink)),
      filter(ads => ads.length > 0)
    );
  }

  ngOnDestroy(): void { }

}
