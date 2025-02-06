import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: false,
  templateUrl: './page-layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class PageLayoutComponent { }
