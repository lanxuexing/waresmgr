import { Directive, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective implements OnInit {
  // 第一种写法：HostBinding 绑定宿主的属性or样式 可以指定为@Input()
  @HostBinding('style.display')
  display = 'grid';
  @HostBinding('style.grid-template-areas')
  gridTemplate = `'image' 'title'`;
  @HostBinding('style.place-items')
  placeItem = 'center';
  @HostBinding('style.width')
  width = '4rem';

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    // 第二种写法：Renderer2 绘制对象
    // this.render.setStyle(this.elementRef.nativeElement, 'display', 'grid');
    // this.render.setStyle(this.elementRef.nativeElement, 'grid-template-areas', `'image' 'title`);
    // this.render.setStyle(this.elementRef.nativeElement, 'place-items', 'center');
    // this.render.setStyle(this.elementRef.nativeElement, 'width', '4rem');
  }

}
