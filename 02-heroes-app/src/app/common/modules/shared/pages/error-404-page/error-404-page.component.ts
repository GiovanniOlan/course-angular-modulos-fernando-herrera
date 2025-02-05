import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-error-404-page',
  standalone: false,
  template: `<p>error-404-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404PageComponent { }
