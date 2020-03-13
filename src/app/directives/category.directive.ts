import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appCategory]',
})
export class CateGoryDirective {
    @Input() @HostBinding('style.background-color') categoryBackgroundColor = '#FAEFE3';
    @Input() @HostBinding('style.color') categoryColor = '#CA516A';
    @Input() @HostBinding('style.font-size') categoryFontSize = '0.8rem';
    @Input() @HostBinding('style.padding') categoryPadding = '3px';
    @Input() @HostBinding('style.border-radius') categoryBorderRadius = '0';
}
