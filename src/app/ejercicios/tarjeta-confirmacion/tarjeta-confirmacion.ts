import { Component, output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-confirmacion',
  standalone: true,
  templateUrl: './tarjeta-confirmacion.html',
})
export class TarjetaConfirmacionComponent {
  // TODO: crea dos outputs independientes, aceptado = output<void>() y
  // rechazado = output<void>(), con sus métodos alAceptar()/alRechazar()
  // que los emitan, uno por cada botón.
   readonly aceptado = output<void>();
  readonly rechazado = output<void>();

  alAceptar(): void {
    this.aceptado.emit();
  }

  alRechazar(): void {
    this.rechazado.emit();
  }
}

