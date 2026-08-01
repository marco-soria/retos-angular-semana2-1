import { Component } from '@angular/core';
import { DemoCarritoComponent } from './ejercicios/demo-carrito/demo-carrito';
import { DemoBotonMeGustaComponent } from './ejercicios/demo-boton-me-gusta/demo-boton-me-gusta';
import { DemoSemaforoComponent } from './ejercicios/demo-semaforo/demo-semaforo';
import { DemoBuscadorComponent } from './ejercicios/demo-buscador/demo-buscador';
import { DemoTarjetaConfirmacionComponent } from './ejercicios/demo-tarjeta-confirmacion/demo-tarjeta-confirmacion';
import { DemoInterruptorComponent } from './ejercicios/demo-interruptor/demo-interruptor';
import { DemoSelectorCantidadComponent } from './ejercicios/demo-selector-cantidad/demo-selector-cantidad';
import { DemoDeslizadorVolumenComponent } from './ejercicios/demo-deslizador-volumen/demo-deslizador-volumen';
import { DemoCalificacionEstrellasComponent } from './ejercicios/demo-calificacion-estrellas/demo-calificacion-estrellas';

// AppComponent no tiene lógica propia: solo decide, vía app.html, cuál de los
// 9 ejercicios se muestra en pantalla. Para cambiar de ejercicio, comenta el
// que está activo y descomenta el que quieras mostrar (ver app.html).
//
// NOTA: por eso quedan varios imports "sin usar" en el template a la vez;
// está permitido a propósito (ver angularCompilerOptions.extendedDiagnostics
// en tsconfig.json) para no tener que tocar este archivo al cambiar de demo.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DemoCarritoComponent,
    DemoBotonMeGustaComponent,
    DemoSemaforoComponent,
    DemoBuscadorComponent,
    DemoTarjetaConfirmacionComponent,
    DemoInterruptorComponent,
    DemoSelectorCantidadComponent,
    DemoDeslizadorVolumenComponent,
    DemoCalificacionEstrellasComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
