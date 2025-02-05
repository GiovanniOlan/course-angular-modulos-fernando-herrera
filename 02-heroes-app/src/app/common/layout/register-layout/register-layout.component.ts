import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-register-layout',
  standalone: false,
  template: `<p>register-layout works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterLayoutComponent { }
