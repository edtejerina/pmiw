class Disparo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 30;
    this.velocidad = 5;
  }
  
  mover() {
    this.y -= this.velocidad;
  }
  
  mostrar() {
    image(disparoImg, this.x, this.y, this.tamano, this.tamano);
  }
  
  haGolpeado(enemigo) {
    return dist(this.x, this.y, enemigo.x, enemigo.y) < this.tamano / 2 + enemigo.tamano / 2;
  }
}
