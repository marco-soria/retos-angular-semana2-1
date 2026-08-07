import { Component, output } from '@angular/core';

@Component({
  selector: 'app-boton-me-gusta',
  standalone: true,
  templateUrl: './boton-me-gusta.html',
})
export class BotonMeGustaComponent {
  readonly megusta = output<void>();

  alHacerClic(): void {
    this.megusta.emit();
  }
}
