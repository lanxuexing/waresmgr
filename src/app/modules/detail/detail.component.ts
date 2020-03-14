import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from '@models/detail';
import { DetailService } from '@services/detail';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { DialogService } from '@services/dialog';
import { ModalComponent } from '@modules/detail/modal';
import { AutoUnsubscribe } from '@decorators/rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  detail$: Observable<Detail[]>; // 商品详情
  selectedIndex = 0; // 当前选中的商品规格

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private detailService: DetailService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.detail$ = this.route.paramMap.pipe(
      filter(params => params.has('goodsId')),
      map(params => params.get('goodsId')),
      switchMap(goodsId => this.detailService.getGoodsDetailData(+goodsId))
    );
  }

  // 直接购买
  handleDirectBuy(item: Detail): void { }

  // 发起拼单
  handleGroupBuy(item: Detail): void {
    const top = 40;
    const formSubmitted = new EventEmitter();
    formSubmitted.subscribe((ev: {detail: Detail, count: number}) => {
      this.dialogService.saveData(ev);
      this.router.navigate(['/order']);
    });
    const selected = new EventEmitter();
    selected.subscribe((ev: number) => {
      this.selectedIndex = ev;
    });
    this.dialogService.openDialog(ModalComponent, {
      inputs: {
        detail: item,
        selectedIndex: this.selectedIndex
      },
      outputs: {
        formSubmitted,
        selected
      },
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }

  ngOnDestroy(): void { }

}
