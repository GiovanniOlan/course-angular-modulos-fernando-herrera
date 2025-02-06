import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent { }
