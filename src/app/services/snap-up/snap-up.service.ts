import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Fight } from '@models/fight';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SnapUpService {

    constructor(
        private http: HttpClient
    ) { }

    // 获取商品拼单数据
    getSnapUplData(goodsId: number): Observable<Fight[]> {
        return this.http.get<Fight[]>(`${environment.host}/snap-up`, {
            params: { goodsId_like: `${goodsId}` }
        });
    }

}
