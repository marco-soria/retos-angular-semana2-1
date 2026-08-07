import { Component, computed, signal } from '@angular/core';
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
  readonly cantidadA = signal(1);
  readonly cantidadB = signal(1);
  readonly cantidadC = signal(1);

  readonly sumaCantidades = computed(
    () => this.cantidadA() + this.cantidadB() + this.cantidadC(),
  );
}
