import { Component } from '@angular/core';
import { SelectorCantidadComponent } from '../selector-cantidad/selector-cantidad';

@Component({
  selector: 'app-demo-selector-cantidad',
  standalone: true,
  imports: [SelectorCantidadComponent],
  templateUrl: './demo-selector-cantidad.html',
})
export class DemoSelectorCantidadComponent {
  // TODO: crea 3 signals (cantidadA, cantidadB, cantidadC) para enlazar
  // con [(cantidad)] en cada <app-selector-cantidad /> del template, y un
  // computed() llamado "sumaCantidades" que sume las tres.
}
