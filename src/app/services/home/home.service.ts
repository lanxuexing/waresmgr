import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Carousel } from '@models/carousel';
import { HorizontalGrid } from '@models/horizontal-grid';
import { ScrollableTab } from '@models/scrollable-tab';
import { Observable } from 'rxjs';

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

}
