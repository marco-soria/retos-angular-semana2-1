import { Component, signal } from '@angular/core';
import { CalificacionEstrellasComponent } from '../calificacion-estrellas/calificacion-estrellas';

@Component({
  selector: 'app-demo-calificacion-estrellas',
  standalone: true,
  imports: [CalificacionEstrellasComponent],
  templateUrl: './demo-calificacion-estrellas.html',
})
export class DemoCalificacionEstrellasComponent {
  // TODO: crea un signal(3) llamado "miCalificacion" y enlázalo con
  // [(calificacion)]="miCalificacion" en el <app-calificacion-estrellas />
  // del template.
   readonly miCalificacion = signal(3);
}
