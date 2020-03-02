import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  // 第一种写法:
  @Input() imgWidth = '2rem';
  @Input() imgHeight = '2rem';
  @Input() fitModel = 'cover';

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  // HostListener 绑定宿主的事件
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log('appGridItemImage指令点击事件: ', event.target);
  }

  ngOnInit(): void {
    // 第一种写法:
    this.render.setStyle(this.elementRef.nativeElement, 'grid-area', 'image');
    this.render.setStyle(this.elementRef.nativeElement, 'width', this.imgWidth);
    this.render.setStyle(this.elementRef.nativeElement, 'height', this.imgHeight);
    this.render.setStyle(this.elementRef.nativeElement, 'object-fit', this.fitModel);
  }

}
