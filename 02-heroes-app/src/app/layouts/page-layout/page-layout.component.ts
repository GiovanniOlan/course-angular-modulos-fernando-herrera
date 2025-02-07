import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: false,
  templateUrl: './page-layout.component.html',
  styles: `

  `,
})
export class PageLayoutComponent {
  public sidebarItems = [
    {label: 'Listado', icon: 'label', url: '/heroes/list'},
    {label: 'Añadir', icon: 'add', url: '/heroes/add'},
    {label: 'Buscar', icon: 'Search', url: '/heroes/search'},
  ]
}
