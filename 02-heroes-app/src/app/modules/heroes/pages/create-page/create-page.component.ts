import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-page',
  standalone: false,
  templateUrl: './create-page.component.html',
})
export class CreatePageComponent {

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

}
