import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoUnsubscribe } from '@decorators/rxjs';
import { Carousel } from '@models/carousel';
import { HorizontalGrid } from '@models/horizontal-grid';
import { HomeService } from '@services/home';

@AutoUnsubscribe()
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  banners: Carousel[] = [];
  channels: HorizontalGrid[] = [];
  selectedTabLink: string; // 当前选中的TopMenuLink
  timeHourglassTitle = '距离拼团结束时间';
  effectiveDate = new Date('2020-03-11');
  expiredDate = new Date('2020-03-12');

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.route.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    });
  }

  ngOnInit(): void {
    this.homeService.getBannerData().subscribe(tabs => {
      this.banners = tabs;
    });
    this.homeService.getHorizontalGridData().subscribe(channels => {
      this.channels = channels;
    });
  }

  ngOnDestroy(): void { }

}
