import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-buscador',
  standalone: true,
  templateUrl: './buscador.html',
})
export class BuscadorComponent {
  // TODO: crea un signal('') llamado "texto" para guardar lo que el
  // usuario escribe, un output<string>() llamado "buscar", y los métodos
  // alEscribir(evento: Event) y alBuscar() (este último debe emitir el
  // texto solo al hacer clic en "Buscar", no en cada tecla).
  readonly texto = signal('');
  readonly buscar = output<string>();

  alEscribir(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.texto.set(input.value);
  }

  alBuscar(): void {
    this.buscar.emit(this.texto());
  }
}
