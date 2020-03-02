import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent {
  @Input() cols = 10;
  @Input() displayCols = 5;
  sliderMargin = '0';

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  public get templateColumns(): string {
    return `repeat(${this.cols}, calc(
      (100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}
    ))`;
  }

  constructor() { }

  public onScroll(event: Event): void {
    this.sliderMargin = `0 ${100 * (event.target as HTMLElement).scrollLeft / (event.target as HTMLElement).scrollWidth}%`;
  }

}
