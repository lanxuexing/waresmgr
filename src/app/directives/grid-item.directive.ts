import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'display', 'grid');
    this.render.setStyle(this.elementRef.nativeElement, 'grid-template-areas', `'image' 'title`);
    this.render.setStyle(this.elementRef.nativeElement, 'place-item', 'center');
    this.render.setStyle(this.elementRef.nativeElement, 'width', '4rem');
  }

}
