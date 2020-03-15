import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Renderer2, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Carousel } from '@models/carousel';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @Input() sliders: Carousel[] = []; // 轮播图
  @Input() sliderHeight = '160px'; // 轮播图高度, 单位: px
  @Input() timeInterval = 3000; // 时间间隔, 单位: ms
  @Input() indicatorColor = 'white'; // 指示器默认颜色
  @Input() indicatorActiveColor = 'red'; // 指示器激活颜色
  @ViewChild('imgSlider', {static: true}) imgSlider: ElementRef;
  selectedIndex = 0; // 当前轮播图索引
  private intervalSubs: Subscription;


  constructor(
    private rd: Renderer2
  ) { }

  ngAfterViewInit(): void {
    if (this.timeInterval <= 0) { return; }
    this.intervalSubs = interval(this.timeInterval).subscribe(_ => {
      this.rd.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getSliderIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length
      );
    });
  }

  // 获取当前轮播图索引
  getSliderIndex(index: number): number {
    return index >= 0
      ? index % this.sliders.length
      : this.sliders.length - (Math.abs(index) % this.sliders.length);
  }

  // 轮播图手动滚动事件监听
  onScroll(event: Event): void {
    const ratio = ((event.target as HTMLElement).scrollLeft * this.sliders.length) / (event.target as HTMLElement).scrollWidth; // 滑动比例
    this.selectedIndex = Math.round(ratio);

  }

  ngOnDestroy(): void {
    if (this.intervalSubs) {
      this.intervalSubs.unsubscribe();
    }
  }

}
