import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payments } from '@config/payment';
import { environment } from '@environments/environment';
import { Detail } from '@models/detail';
import { Payment } from '@models/payment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DetailService {

    constructor(
        private http: HttpClient
    ) { }

    // 获取商品详情数据
    getGoodsDetailData(goodsId: number): Observable<Detail[]> {
        return this.http.get<Detail[]>(`${environment.host}/details`, {
            params: { 'goods.id': `${goodsId}` }
        });
    }

    // 获取支付配置数据
    getPaymentData(): Payment[] {
        return Payments;
    }

}
