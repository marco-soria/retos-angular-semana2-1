import { Component, model } from '@angular/core';

@Component({
  selector: 'app-interruptor',
  standalone: true,
  templateUrl: './interruptor.html',
  styleUrl: 'styles.css'
})
export class InterruptorComponent {
  // TODO: crea activado = model<boolean>(false) y un método alternar()
  // que lo actualice con .update() al hacer clic. Usa [class.x]="activado()"
  // en el template para mover el círculo y cambiar el color de fondo.

  readonly activado = model<boolean>(false);

  alternar(): void {
    this.activado.update((valor) => !valor);
  }                       // emit() viene enlazado con update()/set()

}
