class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.medalla = new Medalla(width / 2, 40);
    this.enemigos = [];
    this.disparos = [];
    this.puntos = 0;
    this.estadoPantalla = "inicio";
    this.metaPuntos = 10;
  }
  
  iniciarJuego() {
    image(fondoImg, 0, 0, width, height);
    this.medalla.mostrar();
    this.jugador.mostrar();

    if (keyIsDown(LEFT_ARROW)) {
      this.jugador.mover(-1);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.jugador.mover(1);
    }
    
    if (frameCount % 120 === 0) {
      this.enemigos.push(new Enemigo(this.medalla));
    }
    
    for (let i = this.disparos.length - 1; i >= 0; i--) {
      this.disparos[i].mover();
      this.disparos[i].mostrar();
      
      for (let j = this.enemigos.length - 1; j >= 0; j--) {
        if (this.disparos[i].haGolpeado(this.enemigos[j])) {
          this.enemigos.splice(j, 1);
          this.disparos.splice(i, 1);
          this.puntos += 1;
          if (this.puntos >= this.metaPuntos) {
            this.estadoPantalla = "ganaste";
          }
          break;
        }
      }
    }
    
    for (let i = this.enemigos.length - 1; i >= 0; i--) {
      this.enemigos[i].mover();
      this.enemigos[i].mostrar();
      
      if (this.enemigos[i].haLlegadoAMedalla()) {
        this.estadoPantalla = "perdiste";
      }
    }

    this.mostrarPuntos(this.puntos);
  }
  
  reiniciarJuego() {
    this.jugador = new Jugador();
    this.medalla = new Medalla(width / 2, 40);
    this.enemigos = [];
    this.disparos = [];
    this.puntos = 0;
  }

  disparar() {
    this.disparos.push(new Disparo(this.jugador.x + this.jugador.tamano / 2, this.jugador.y));
    disparoSonido.play();
  }
  
  getEstadoPantalla() {
    return this.estadoPantalla;
  }
  
  setEstadoPantalla(estado) {
    this.estadoPantalla = estado;
  }

  mostrarPuntos(puntos) {
    fill(255);
    textSize(16);
    text(`Puntos: ${puntos}`, 100, 50);
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
