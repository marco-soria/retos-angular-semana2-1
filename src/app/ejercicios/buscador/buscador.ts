import { Component } from '@angular/core';

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
}
