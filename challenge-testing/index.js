class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(producto) {
    this.carrito.push(producto);
  }
  calcularTotal() {
    return this.carrito.reduce((acom, producto) => acom + producto.price, 0);
  }
  aplicarDescuento(porcentaje) {}
}
