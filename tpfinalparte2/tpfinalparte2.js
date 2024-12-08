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
  pantallas = new controlPantallas();
  juego = new Juego(pantallas);
}

function draw() {
  pantallas.dibujarPantallaActual();
}

function keyPressed() {
  if (pantallas.obtenerEstadoActual() === "inicio") {
    if (keyCode === ENTER) {
      pantallas.cambiarPantalla("jugando");
      juego.iniciarJuego();
    } else if (key === 'i' || key === 'I') {
      pantallas.cambiarPantalla("instrucciones");
    } else if (key === 'c' || key === 'C') {
      pantallas.cambiarPantalla("creditos");
    }
  } else if (pantallas.obtenerEstadoActual() === "instrucciones" && (key === 'b' || key === 'B')) {
    pantallas.cambiarPantalla("inicio");
  } else if (pantallas.obtenerEstadoActual() === "creditos" && (key === 'b' || key === 'B')) {
    pantallas.cambiarPantalla("inicio");
  } else if (pantallas.obtenerEstadoActual() === "perdiste" || pantallas.obtenerEstadoActual() === "ganaste") {
    if (key === 'r' || key === 'R') {
      juego.reiniciarJuego();  // Reiniciar el juego completamente
      pantallas.cambiarPantalla("inicio");
    }
  } else if (pantallas.obtenerEstadoActual() === "jugando" && key === ' ') {
    juego.disparar();
  }
}
