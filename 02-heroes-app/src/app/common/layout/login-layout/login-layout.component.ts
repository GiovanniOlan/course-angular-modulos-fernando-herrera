import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  standalone: false,
  template: `<p>login-layout works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginLayoutComponent { }
