import { Component, model } from '@angular/core';

@Component({
  selector: 'app-deslizador-volumen',
  standalone: true,
  templateUrl: './deslizador-volumen.html',
})
export class DeslizadorVolumenComponent {
  // TODO: crea volumen = model<number>(50) y un método
  // alMover(evento: Event) que lo actualice con el valor del
  // <input type="range">.
  readonly volumen = model<number>(50);

  alMover(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.volumen.set(Number(input.value));
  }
}
