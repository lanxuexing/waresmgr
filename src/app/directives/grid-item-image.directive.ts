import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @Input() imgWidth = '2rem';
  @Input() imgHeight = '2rem';
  @Input() fitModel = 'cover';

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.render.setStyle(this.elementRef.nativeElement, 'grid-area', 'image');
    this.render.setStyle(this.elementRef.nativeElement, 'width', this.imgWidth);
    this.render.setStyle(this.elementRef.nativeElement, 'height', this.imgHeight);
    this.render.setStyle(this.elementRef.nativeElement, 'object-fit', this.fitModel);
  }

}
