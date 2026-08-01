import { Component, input, model, output } from '@angular/core';

interface IAddToCart {
  id: number, nombre: string, precio: number, cantidad: number
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  // TODO: agrega los input.required<>() para id, nombre, precio, imagen
  // e imagenAlt; un model<number>(1) llamado "cantidad" con sus métodos
  // incrementar()/decrementar() (mínimo 1, sin máximo); y un output()
  // llamado "addToCart" con un método agregarAlCarrito() que emita
  // { id, nombre, precio, cantidad }.

  id = input.required<number>()
  nombre = input.required<string>()
  precio = input.required<number>()
  imagen = input.required<string>()

  cantidad = model<number>(1)

  addToCart = output<IAddToCart>()

  incrementar(){
    this.cantidad.update((valorActual)=>{return valorActual + 1})
  }

  reducir(){
    this.cantidad.update((valorActual)=>{
      if(valorActual === 1){
        return 1
      }
      return valorActual - 1
    })
  }

  agregarAlCarrito(){
    this.addToCart.emit({
      id: this.id(),
      precio: this.precio(),
      nombre: this.nombre(),
      cantidad: this.cantidad()
    })
  }

}
