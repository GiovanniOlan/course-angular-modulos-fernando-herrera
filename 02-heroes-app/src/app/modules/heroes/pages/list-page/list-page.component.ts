import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-list-page',
  standalone: false,
  template: `<p>list-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent { }
