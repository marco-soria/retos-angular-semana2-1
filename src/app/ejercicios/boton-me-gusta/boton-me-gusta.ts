import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-boton-me-gusta',
  standalone: true,
  templateUrl: './boton-me-gusta.html',
})
export class BotonMeGustaComponent {
  // TODO: crea aquí un output<void>() llamado "megusta" y un método
  // alHacerClic() que lo emita, para avisar al padre cada vez que hacen
  // clic en el botón de corazón.

  cantidadDeLikes = input.required<number>()
  megusta = output<number>()   // canal de comunicion al que llegan los eventos

  alHacerClic(){
    this.megusta.emit(this.cantidadDeLikes())  // emitir nuestro anuncio
    // $event = el valor que estamos emitiendo
  }

}
