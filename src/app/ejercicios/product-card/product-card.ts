import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  // TODO: agrega los input.required<>() para id, nombre, precio, imagen
  // e imagenAlt; un model<number>(1) llamado "qty" con sus métodos
  // incrementar()/decrementar() (mínimo 1, sin máximo); y un output()
  // llamado "addToCart" con un método agregarAlCarrito() que emita
  // { id, nombre, precio, qty }.
}
