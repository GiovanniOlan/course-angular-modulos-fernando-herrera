import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-signup-page',
  standalone: false,
  templateUrl: './signup-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent { }
