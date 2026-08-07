import { Component, output } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  standalone: true,
  templateUrl: './semaforo.html',
})
export class SemaforoComponent {
  // TODO: crea aquí un output<string>() llamado "cambio" y un método
  // seleccionar(color: string) que lo emita al hacer clic en cada luz.
   readonly cambio = output<string>();

  seleccionar(color: string): void {
    this.cambio.emit(color);
  }
}
