import { Component, signal } from '@angular/core';
import { BotonMeGustaComponent } from '../boton-me-gusta/boton-me-gusta';

@Component({
  selector: 'app-demo-boton-me-gusta',
  standalone: true,
  imports: [BotonMeGustaComponent],
  templateUrl: './demo-boton-me-gusta.html',
})
export class DemoBotonMeGustaComponent {
  // TODO: crea un signal(0) llamado "totalMeGusta" y un método
  // alDarMeGusta() que lo incremente. Escúchalo con
  // (megusta)="alDarMeGusta()" en el <app-boton-me-gusta /> del template.

 readonly totalMeGusta = signal(0);

  alDarMeGusta(): void {
    this.totalMeGusta.update((valor) => valor + 1);
}
}
