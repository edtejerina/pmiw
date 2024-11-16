class Medalla {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 60;
  }
  
  mostrar() {
    image(medallaImg, this.x, this.y, this.tamano, this.tamano);
  }
  
  getTamano() {
    return this.tamano;
  }
  getPosicionHorizontal() {
    return this.x;
  }
  getPosicionVertical(){
    return this.y;
  }
}
