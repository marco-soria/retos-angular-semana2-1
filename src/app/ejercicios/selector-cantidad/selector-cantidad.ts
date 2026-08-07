import { Component, model } from '@angular/core';

@Component({
  selector: 'app-selector-cantidad',
  standalone: true,
  templateUrl: './selector-cantidad.html',
})
export class SelectorCantidadComponent {
  // TODO: crea cantidad = model<number>(1) y los métodos
  // incrementar()/decrementar() (mínimo 1, sin máximo).
  readonly cantidad = model<number>(1);

  incrementar(): void {
    this.cantidad.update((valor) => valor + 1);
  }

  decrementar(): void {
    this.cantidad.update((valor) => Math.max(1, valor - 1));
  }
}
