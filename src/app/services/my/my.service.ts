import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyOrderItemConfig, MyToolsItemConfig } from '@config/my';
import { environment } from '@environments/environment';
import { Profile } from '@models/profile';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MyService {

    constructor(
        private http: HttpClient
    ) { }

    // 获取我的个人信息
    getProfileData(): Observable<Profile> {
        return this.http.get<Profile>(`${environment.host}/profile`);
    }

    // 保存我的个人信息
    saveProfileData(profile: Profile): Observable<Profile> {
        const headers = {'Content-Type': 'application/json'};
        return this.http.post<Profile>(`${environment.host}/profile`, profile, {
            headers
        });
    }

    // 获取订单配置信息
    getOrderItemsData(): {title: string, icon: string}[] {
        return MyOrderItemConfig;
    }

    // 获取工具配置信息
    getToolsItemsData(): {title: string, icon: string}[] {
        return MyToolsItemConfig;
    }

}
