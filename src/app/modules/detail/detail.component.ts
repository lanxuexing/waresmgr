import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detail } from '@models/detail';
import { DetailService } from '@services/detail/detail.service';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail$: Observable<Detail[]>; // 商品详情
  selectedIndex = 0; // 当前选中的商品规格

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) { }

  ngOnInit(): void {
    this.detail$ = this.route.paramMap.pipe(
      filter(params => params.has('goodsId')),
      map(params => params.get('goodsId')),
      switchMap(goodsId => this.detailService.getGoodsDetailData(+goodsId))
    );
  }

  // 直接购买
  handleDirectBuy(item: Detail): void { }

  // 发起拼单
  handleGroupBuy(item: Detail): void { }

}
