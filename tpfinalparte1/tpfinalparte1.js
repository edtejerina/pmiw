//Edgar Sardina Tejerina comi 5
//Video explicativo: https://youtu.be/6LhbWgYiiHA
let estado;
let sonido;
let textosHistoria = [];
let opcion1 = [];
let opcion2 = [];
let siguiente1 = [];
let siguiente2 = []; 
let imagenes = [];
let fuentePixel;
let fuenteGenerica;
let contenidoTextos;

function preload() {
  sonido = loadSound('data/sonidos/musica.mp3'); 
  fuentePixel = loadFont('data/fuentes/PressStart2P-Regular.ttf');
  fuenteGenerica = loadFont('data/fuentes/Roboto-Regular.ttf');
  contenidoTextos = loadStrings('data/textos.txt');

  for (let i = 0; i <= 21; i++) {
    const path = `data/imagenes/imagen${i}.png`;
    imagenes.push(loadImage(path));
  }
}

function setup() {
  createCanvas(640, 480);
  inicializar();
}

function draw() {
  if (estado === 0) {
    pantallaInicio();
    sonido.stop();
  } else if (estado === 21) {
    pantallaCreditos();
  } else if (estado >= 1 && estado <= 20) {
    pantallaHistoria(estado);
  }
}

function mousePressed() {
  if (estado === 0) {
    if (colisionBoton(width/2, height*0.75, 200, 40)) {
      estado = 1;
      sonido.loop(); 
    } else if (colisionBoton(width/2, height*0.75+60, 200, 40)) {
      estado = 21;
    }
  } else if (estado === 21) {
    if (colisionBoton(width/2, height*0.75+60, 200, 40)) {
      estado = 0;
    }
  } else if (estado >= 1 && estado <= 20) {
    if (opcion1[estado] === opcion2[estado]) {
      if (colisionBoton(width / 2, height - 40, 160, 40)) {
        estado = siguiente1[estado];
      }
    } else {
      if (colisionBoton(width / 3, height - 40, 160, 40)) {
        estado = siguiente1[estado];
      } else if (colisionBoton(2 * width / 3, height - 40, 160, 40)) {
        estado = siguiente2[estado];
      }
    }
  }
}
