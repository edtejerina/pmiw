class Juego {
  constructor(pantalla) {
    this.jugador = new Jugador();
    this.medalla = new Medalla(width / 2, 40);
    this.enemigos = [];
    this.disparos = [];
    this.puntos = 0;
    this.pantalla = pantalla;
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
            this.setEstadoPantalla("ganaste");
          }
          break;
        }
      }
    }
    
    for (let i = this.enemigos.length - 1; i >= 0; i--) {
      this.enemigos[i].mover();
      this.enemigos[i].mostrar();
      
      if (this.enemigos[i].haLlegadoAMedalla()) {
        this.setEstadoPantalla("perdiste");
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
    return this.pantalla.obtenerEstadoActual();
  }
  
  setEstadoPantalla(estado) {
    this.pantalla.cambiarPantalla(estado);
  }

  mostrarPuntos(puntos) {
    fill(255);
    textSize(16);
    text(`Puntos: ${puntos}`, 100, 50);
  }
  
}
