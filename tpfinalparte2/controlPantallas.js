class controlPantallas {
  constructor() {
    this.estadoPantalla = "inicio";
  }
  

  cambiarPantalla(nuevaPantalla) {
    this.estadoPantalla = nuevaPantalla;
  }
  
  obtenerEstadoActual() {
    return this.estadoPantalla;
  }

  dibujarPantallaActual() {
    if (this.estadoPantalla === "inicio") {
      this.mostrarPantallaInicio();
    } else if (this.estadoPantalla === "instrucciones") {
      this.mostrarPantallaInstrucciones();
    } else if (this.estadoPantalla === "jugando") {
      juego.iniciarJuego();
    } else if (this.estadoPantalla === "perdiste") {
      this.mostrarPantallaPerdiste();
    } else if (this.estadoPantalla === "ganaste") {
      this.mostrarPantallaGanaste();
    } else if (this.estadoPantalla === "creditos") {
      this.mostrarPantallaCreditos();
    }
    
  }
  
  
  mostrarPantallaInicio() {
    textFont(fuentePixel);
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Ralph El Demoledor", width / 2, height / 2 - 40);
    textSize(16);
    text("Presiona ENTER para comenzar", width / 2, height / 2 + 20);
    text("Presiona I para ver instrucciones", width / 2, height / 2 + 60);
    text("Presiona C para ver créditos", width / 2, height / 2 + 100);
  }

  mostrarPantallaInstrucciones() {
    textFont(fuentePixel);
    background(50);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width / 2, 50);
    textSize(12);
    text("1. Usa las flechas izquierda/derecha para moverte.", width / 2, 120);
    text("2. Presiona ESPACIO para disparar.", width / 2, 150);
    text("3. Evita que los enemigos lleguen a la medalla.", width / 2, 180);
    text("4. Ganas al alcanzar 10 puntos eliminando enemigos.", width / 2, 210);
    text("5. Pierdes si un enemigo toca la medalla.", width / 2, 240);
    textSize(14);
    text("Presiona B para volver al inicio", width / 2, height - 50);
  }

  mostrarPantallaPerdiste() {
    textFont(fuentePixel);
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡PERDISTE!", width / 2, height / 2 - 40);
    textSize(16);
    text("Presiona R para volver a intentar", width / 2, height / 2 + 20);
  }

  mostrarPantallaGanaste() {
    textFont(fuentePixel);
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡GANASTE!", width / 2, height / 2 - 40);
    textSize(16);
    text("Presiona R para volver a intentar", width / 2, height / 2 + 20);
  }
  
  mostrarPantallaCreditos() {
    textFont(fuentePixel);
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 2 - 40);
    textSize(16);
    text("Desarrollado por tu nombre", width / 2, height / 2 + 20);
    text("Presiona B para volver al inicio", width / 2, height - 50);
  }
}
