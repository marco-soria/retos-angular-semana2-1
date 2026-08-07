import { Component, signal } from '@angular/core';
import { BuscadorComponent } from '../buscador/buscador';

@Component({
  selector: 'app-demo-buscador',
  standalone: true,
  imports: [BuscadorComponent],
  templateUrl: './demo-buscador.html',
})
export class DemoBuscadorComponent {
  // TODO: crea un signal('') llamado "textoBuscado" y un método
  // alBuscar(texto: string) que lo actualice. Escúchalo con
  // (buscar)="alBuscar($event)" en el <app-buscador /> del template.
  readonly textoBuscado = signal('');

  alBuscar(texto: string): void {
    this.textoBuscado.set(texto);
  }
}
