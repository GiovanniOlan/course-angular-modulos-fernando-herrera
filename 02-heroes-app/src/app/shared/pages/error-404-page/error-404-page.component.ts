import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-404-page',
  imports: [],
  template: `<p>error-404-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404PageComponent { }
