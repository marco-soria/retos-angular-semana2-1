import { Component, signal } from '@angular/core';
import { TarjetaConfirmacionComponent } from '../tarjeta-confirmacion/tarjeta-confirmacion';

@Component({
  selector: 'app-demo-tarjeta-confirmacion',
  standalone: true,
  imports: [TarjetaConfirmacionComponent],
  templateUrl: './demo-tarjeta-confirmacion.html',
})
export class DemoTarjetaConfirmacionComponent {
  // TODO: crea un signal('Sin responder todavía') llamado
  // "estadoConfirmacion" y los métodos alAceptar()/alRechazar() que lo
  // actualicen. Escúchalos con (aceptado) y (rechazado) en el
  // <app-tarjeta-confirmacion /> del template.
  readonly estadoConfirmacion = signal('Sin responder todavía');

  alAceptar(): void {
    this.estadoConfirmacion.set('Acción aceptada ✓');
  }

  alRechazar(): void {
    this.estadoConfirmacion.set('Acción rechazada ✗');
  }
}
