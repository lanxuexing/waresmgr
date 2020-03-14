import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Fight } from '@models/fight';
import { SnapUpService } from '@services/snap-up';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-snap-up',
  templateUrl: './snap-up.component.html',
  styleUrls: ['./snap-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnapUpComponent implements OnInit {
  @Input() groupFight$: Observable<Fight[]>;
  @Input() row = 2;

  constructor(
    private snapUpService: SnapUpService
  ) { }

  ngOnInit(): void {
    this.groupFight$ = this.snapUpService.getSnapUplData(1);
  }

}
