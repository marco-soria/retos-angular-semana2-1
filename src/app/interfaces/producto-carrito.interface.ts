export interface IProductoTienda {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

export interface IProductoCarrito {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}
