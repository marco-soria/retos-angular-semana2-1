import { Component } from '@angular/core';
import { DeslizadorVolumenComponent } from '../deslizador-volumen/deslizador-volumen';

@Component({
  selector: 'app-demo-deslizador-volumen',
  standalone: true,
  imports: [DeslizadorVolumenComponent],
  templateUrl: './demo-deslizador-volumen.html',
})
export class DemoDeslizadorVolumenComponent {
  // TODO: crea un signal(50) llamado "volumen", enlázalo con
  // [(volumen)]="volumen" en el <app-deslizador-volumen /> del template, y
  // un computed() llamado "descripcionVolumen" con ternarios anidados
  // (0-20 Silencio, 21-60 Volumen bajo, 61-100 Volumen alto).
}
