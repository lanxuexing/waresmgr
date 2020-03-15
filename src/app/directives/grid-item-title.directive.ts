import { Directive, OnInit, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {
  // 第二种写法: HostBinding 绑定宿主的属性or样式，可以套用@Input()
  @HostBinding('style.grid-area') gridArea = 'title';
  @HostBinding('style.font-size')
  @Input() fontSize = '0.6rem';

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    // 第一种写法:
    // this.render.setStyle(this.elementRef.nativeElement, 'grid-area', 'title');
  }

}
