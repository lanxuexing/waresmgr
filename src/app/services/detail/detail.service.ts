import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Detail } from '@models/detail';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DetailService {

    constructor(
        private http: HttpClient
    ) { }

    // 获取商品详情数据
    getGoodsDetailData(goodsId: number): Observable<Detail> {
        return this.http.get<Detail>(`${environment.host}/details`, {
            params: { 'goods.id': `${goodsId}` }
        }).pipe(
            map(goods => goods[0] || [])
        );
    }

}
