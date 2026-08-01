import { Component, signal } from '@angular/core';
import { InterruptorComponent } from '../interruptor/interruptor';

@Component({
  selector: 'app-demo-interruptor',
  standalone: true,
  imports: [InterruptorComponent],
  templateUrl: './demo-interruptor.html',
})
export class DemoInterruptorComponent {
  // TODO: crea un signal(false) llamado "luzEncendida" y enlázalo con
  // [(activado)]="luzEncendida" en el <app-interruptor /> del template.
  luzEncendida = signal(true)
}
