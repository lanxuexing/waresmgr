import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from '@models/ad';
import { HomeService } from '@services/home';
import { filter, map } from 'rxjs/operators';
import { Goods } from '@models/goods';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {
  ad$: Observable<Ad>; // 广告
  goods$: Observable<Goods[]>; // 商品
  tabLink = 'hot-rec';

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.ad$ = this.homeService.getAdData(this.tabLink).pipe(
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );
    this.goods$ = this.homeService.getGoodsData(this.tabLink);
  }

}
