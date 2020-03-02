import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'grid-area', 'title');
  }

}
