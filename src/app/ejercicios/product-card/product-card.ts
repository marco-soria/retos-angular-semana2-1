import { Component, input, model, output } from '@angular/core';
import { EstadoStockPipe } from '../../pipes/estado-stock-pipe';

export interface AddToCartEvent {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [EstadoStockPipe],
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  // TODO: agrega los input.required<>() para id, nombre, precio, imagen
  // e imagenAlt; un model<number>(1) llamado "cantidad" con sus métodos
  // incrementar()/decrementar() (mínimo 1, sin máximo); y un output()
  // llamado "addToCart" con un método agregarAlCarrito() que emita
  // { id, nombre, precio, cantidad }.

   readonly id = input.required<number>();
  readonly nombre = input.required<string>();
  readonly precio = input.required<number>();
  readonly imagen = input.required<string>();
  readonly imagenAlt = input.required<string>();

  readonly cantidad = model<number>(1);

  readonly addToCart = output<AddToCartEvent>();

  incrementar(): void {
    this.cantidad.update((valor) => valor + 1);
  }

  decrementar(): void {
    this.cantidad.update((valor) => Math.max(1, valor - 1));
  }

  agregarAlCarrito(): void {
    this.addToCart.emit({
      id: this.id(),
      nombre: this.nombre(),
      precio: this.precio(),
      cantidad: this.cantidad(),
    });
  }

}
