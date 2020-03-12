import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Carousel } from '@models/carousel';
import { HorizontalGrid } from '@models/horizontal-grid';
import { ScrollableTab } from '@models/scrollable-tab';
import { Observable } from 'rxjs';
import { Tabs } from '@models/tabs';
import { tabsConfig } from '@config/tsbs';
import { Ad } from '@models/ad';
import { Goods } from '@models/goods';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(
        private http: HttpClient
    ) { }

    // 获取顶部ScrollTabs数据
    getScrollTabData(): Observable<ScrollableTab[]> {
        return this.http.get<ScrollableTab[]>(`${environment.host}/tabs`);
    }

    // 获取轮播图数据
    getBannerData(): Observable<Carousel[]> {
        return this.http.get<Carousel[]>(`${environment.host}/banners`);
    }

    // 获取分类数据
    getHorizontalGridData(): Observable<HorizontalGrid[]> {
        return this.http.get<HorizontalGrid[]>(`${environment.host}/channels`);
    }

    // 获取广告数据
    getAdData(category: string): Observable<Ad[]> {
        return this.http.get<Ad[]>(`${environment.host}/ads`, {
            params: { category_like: `${category}` }
        });
    }

    // 获取商品数据
    getGoodsData(category: string): Observable<Goods[]> {
        return this.http.get<Goods[]>(`${environment.host}/goods`, {
            params: { category_like: `${category}` }
        });
    }

    // 获取底部菜单
    getTabsData(): Tabs[] {
        return tabsConfig;
    }

}
