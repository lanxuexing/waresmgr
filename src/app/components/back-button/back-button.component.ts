import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent {
  @Input() float = true; // 是否使用覆盖物

  constructor(
    private location: Location
  ) { }

  get imageUrl() {
    return this.float ? `assets/images/icons/back_light.png` : `assets/images/icons/back_dark.png`;
  }

  handleBack(): void {
    this.location.back();
  }

}
