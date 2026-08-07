import { Component, computed, signal } from '@angular/core';
import { ItemCarrito } from '../../models/carrito.model';
import { AddToCartEvent, ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-demo-carrito',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './demo-carrito.html',
})
export class DemoCarritoComponent {
  readonly carrito = signal<ItemCarrito[]>([]);

  readonly totalItems = computed(() =>
    this.carrito().reduce((suma, item) => suma + item.qty, 0),
  );

  readonly totalSoles = computed(() =>
    this.carrito().reduce((suma, item) => suma + item.precio * item.qty, 0),
  );

  onAddToCart(item: AddToCartEvent): void {
    this.carrito.update((items) => {
      const existente = items.find((i) => i.id === item.id);

      if (existente) {
        return items.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + item.cantidad } : i,
        );
      }

      return [
        ...items,
        {
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          qty: item.cantidad,
        },
      ];
    });
  }
}
