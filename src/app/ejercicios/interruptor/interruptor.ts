import { Component, model } from '@angular/core';

@Component({
  selector: 'app-interruptor',
  standalone: true,
  templateUrl: './interruptor.html',
  styleUrl: '/styles.css'
})
export class InterruptorComponent {
  // TODO: crea activado = model<boolean>(false) y un método alternar()
  // que lo actualice con .update() al hacer clic. Usa [class.x]="activado()"
  // en el template para mover el círculo y cambiar el color de fondo.

  activado = model()   // abarca la creacion de input y ouptut

  alternar(){
    this.activado.update((valorActual)=>{return !valorActual})
  }                        // emit() viene enlazado con update()/set()

}
