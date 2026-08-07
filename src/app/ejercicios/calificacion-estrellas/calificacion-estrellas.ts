import { Component, model } from '@angular/core';

@Component({
  selector: 'app-calificacion-estrellas',
  standalone: true,
  templateUrl: './calificacion-estrellas.html',
})
export class CalificacionEstrellasComponent {
  // TODO: crea calificacion = model<number>(0) y un método
  // calificar(valor: number) que lo actualice al hacer clic en una
  // estrella (1 a 5).
  readonly calificacion = model<number>(0);
  readonly estrellas = [1, 2, 3, 4, 5] as const;

  calificar(valor: number): void {
    this.calificacion.set(valor);
  }
}
