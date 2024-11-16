class Jugador {
  constructor() {
    this.x = width / 2;
    this.y = height - (100 + 30);
    this.tamano = 100;
  }
  
  mostrar() {
    image(jugadorImg, this.x, this.y, this.tamano, this.tamano + 30);
  }
  
  mover(direccion) {
    this.x += direccion * 5;
    this.x = constrain(this.x, 0, width - this.tamano);
  }
}
