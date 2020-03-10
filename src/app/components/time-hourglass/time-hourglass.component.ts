import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-time-hourglass',
  templateUrl: './time-hourglass.component.html',
  styleUrls: ['./time-hourglass.component.scss']
})
export class TimeHourglassComponent implements OnInit {
  @Input() effectiveDate: Date; // 有效时间
  @Input() expiredDate: Date; // 过期时间
  @Input() title: string; // 时间沙漏描述
  timeHourGlass$: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.timeHourGlass$ = this.getTimeHourGlassObservable();
  }

  // 获取时间沙漏（倒计时）可观察对象
  private getTimeHourGlassObservable(): Observable<string> {
    return interval(1000).pipe(
      map(elapse => this.diffInSec(this.effectiveDate, this.expiredDate) - elapse),
      takeWhile(gap => gap >= 0),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor(sec / 3600 % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({ hour, minute, second }) => `${this.title || ''} ${hour}:${minute}:${second}`));
  }

  // 计算有效期和过期时间的时间差
  private diffInSec(effective: Date, expired: Date): number {
    if (!effective && !expired) { return 0; }
    const diff = expired.getTime() - effective.getTime();
    return Math.floor(diff / 1000); // 将毫秒转换成秒并返回
  }

}
