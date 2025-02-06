import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  standalone: false,
  templateUrl: './auth-layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent { }
