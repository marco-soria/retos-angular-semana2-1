import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-demo-carrito',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './demo-carrito.html',
})
export class DemoCarritoComponent {
  // TODO: crea carrito = signal<ItemCarrito[]>([]) (ver
  // ../../models/carrito.model.ts), los métodos totalItems()/totalSoles()
  // que lo recorran, y onAddToCart(item) que agregue el producto (sumando
  // la cantidad si el id ya existe). Escúchalo con
  // (addToCart)="onAddToCart($event)" en cada <app-product-card />.
}
