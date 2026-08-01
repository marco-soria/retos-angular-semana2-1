import { Component } from '@angular/core';
import { SemaforoComponent } from '../semaforo/semaforo';

@Component({
  selector: 'app-demo-semaforo',
  standalone: true,
  imports: [SemaforoComponent],
  templateUrl: './demo-semaforo.html',
})
export class DemoSemaforoComponent {
  // TODO: crea un signal('verde') llamado "colorSemaforo" y un método
  // alCambiarSemaforo(color: string) que lo actualice. Escúchalo con
  // (cambio)="alCambiarSemaforo($event)" en el <app-semaforo /> del template.
}
