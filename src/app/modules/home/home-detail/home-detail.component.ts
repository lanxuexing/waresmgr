import { Component, OnInit } from '@angular/core';
import { Carousel } from '@models/carousel';
import { HorizontalGrid } from '@models/horizontal-grid';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '@services/home';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  banners: Carousel[] = [];
  channels: HorizontalGrid[] = [];
  selectedTabLink: string; // 当前选中的TopMenuLink

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.route.paramMap.subscribe(params => {
      console.log('路由参数: ', params);
      this.selectedTabLink = params.get('tabLink');
    });
  }

  ngOnInit(): void {
    this.banners = this.homeService.getBannerData();
    this.channels = this.homeService.getHorizontalGridData();
  }

}
