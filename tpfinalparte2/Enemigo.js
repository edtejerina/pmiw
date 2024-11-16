class Enemigo {
  constructor(medalla) {
    this.medalla = medalla;
    this.x = random([0, width]); // Posición inicial aleatoria en X
    this.y = medalla.getPosicionVertical();
    this.tamano = 60;
    this.velocidad = 1 + random(1); // Velocidad aleatoria
  }
  
  mover() {
    // Mover al enemigo solo horizontalmente hacia la medalla
    if (this.x < this.medalla.getPosicionHorizontal()) {
      this.x += this.velocidad; // Mover a la derecha
    } else if (this.x > this.medalla.getPosicionHorizontal()) {
      this.x -= this.velocidad; // Mover a la izquierda
    }
  }
  
  mostrar() {
    image(enemigoImg, this.x, this.y, this.tamano, this.tamano);
  }
  
  haLlegadoAMedalla() {
    return dist(this.x, this.y, this.medalla.getPosicionHorizontal(), this.medalla.getPosicionVertical()) < this.medalla.getTamano() / 2 + this.medalla.getTamano() / 2;
  }
}
