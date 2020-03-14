import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Fight } from '@models/fight';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightComponent implements OnInit {
  @Input() fight: Fight;
  timeHourglassTitle = '剩余';
  effectiveDate: Date; // 有效时间
  expiredDate: Date; // 过期时间

  constructor() { }

  ngOnInit(): void {
    this.effectiveDate = new Date(this.fight.startAt);
    this.expiredDate = new Date(new Date(this.fight.startAt).getTime() + 24 * 3600 * 1000);
  }

}
