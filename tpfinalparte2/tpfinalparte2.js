//Video explicativo: https://www.youtube.com/watch?v=fFhag9iDNrU
let juego;
let judadorImg, enemigoImg, medallaImg, disparoImg, fondoImg, disparoSonido, fuentePixel;

function preload() {
  jugadorImg = loadImage('imagenes/ralph.png');
  enemigoImg = loadImage('imagenes/enemigo.png');
  medallaImg = loadImage('imagenes/medalla.png');
  disparoImg = loadImage('imagenes/disparo.png');
  fondoImg = loadImage('imagenes/fondo.png');
  disparoSonido = loadSound('sonidos/disparo.mp3');
  fuentePixel = loadFont('fuentes/PressStart2P-Regular.ttf');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  if (juego.getEstadoPantalla() === "inicio") {
    juego.mostrarPantallaInicio();
  } else if (juego.getEstadoPantalla() === "instrucciones") {
    juego.mostrarPantallaInstrucciones();
  } else if (juego.getEstadoPantalla() === "jugando") {
    juego.iniciarJuego();
  } else if (juego.getEstadoPantalla() === "perdiste") {
    juego.mostrarPantallaPerdiste();
  } else if (juego.getEstadoPantalla() === "ganaste") {
    juego.mostrarPantallaGanaste();
  } else if (juego.getEstadoPantalla() === "creditos") {
    juego.mostrarPantallaCreditos();
  }
}

function keyPressed() {
  if (juego.getEstadoPantalla() === "inicio") {
    if (keyCode === ENTER) {
      juego.setEstadoPantalla("jugando");
      juego.iniciarJuego();
    } else if (key === 'i' || key === 'I') {
      juego.setEstadoPantalla("instrucciones");
    } else if (key === 'c' || key === 'C') {
      juego.setEstadoPantalla("creditos");
    }
  } else if (juego.getEstadoPantalla() === "instrucciones" && (key === 'b' || key === 'B')) {
    juego.setEstadoPantalla("inicio");
  } else if (juego.getEstadoPantalla() === "creditos" && (key === 'b' || key === 'B')) {
    juego.setEstadoPantalla("inicio");
  } else if (juego.getEstadoPantalla() === "perdiste" || juego.getEstadoPantalla() === "ganaste") {
    if (key === 'r' || key === 'R') {
      juego.reiniciarJuego();  // Reiniciar el juego completamente
      juego.setEstadoPantalla("inicio");
    }
  } else if (juego.getEstadoPantalla() === "jugando" && key === ' ') {
    juego.disparar();
  }
}
