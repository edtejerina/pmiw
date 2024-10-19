//Edgar Sardina Tejerina comi 5
//Video explicativo: https://youtu.be/6LhbWgYiiHA
let estado;
let sonido;
let textos = [];
let imagenes = [];
let fuentePixel;


function preload() {
   sonido = loadSound('data/sonidos/musica.mp3'); 
   fuentePixel = loadFont('data/fuentes/PressStart2P-Regular.ttf');
   fuenteGenerica = loadFont('data/fuentes/Roboto-Regular.ttf');

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
  //Dibuja segun el estado actual
  if (estado === 0) {
    pantallaInicio();  // Inicio
    sonido.stop();
  } else if (estado === 21) {
    pantallaCreditos();  // Creditos
  } else if (estado >= 1 && estado <= 20) {
    pantallaHistoria(textos[estado]);  // Historia
  }
}

function mousePressed() {
  if (estado === 0) { //inicio
    if (colisionBoton(width/2, height*0.75, 200, 40)) {
      estado = 1;
      sonido.loop(); 
    } else if (colisionBoton(width/2, height*0.75+60, 200, 40)) {
      estado = 21;
    }
  } else if (estado === 21) { //creditos
    if (colisionBoton(width/2, height*0.75+60, 200, 40)) {
      estado = 0;  // vuelve a pantalla de inicio
    }
  } else if (estado >= 1 && estado <= 20) { //durante la historia
  
    //se hace esto porque puede haber 1 o dos botones
    if (textos[estado].opciones[0] === textos[estado].opciones[1]) {
      if (colisionBoton(width / 2, height - 40, 160, 40)) {
        estado = textos[estado].siguiente[0];
      }
    } else {
      if (colisionBoton(width / 3, height - 40, 160, 40)) {
        estado = textos[estado].siguiente[0]; 
      } else if (colisionBoton(2 * width / 3, height - 40, 160, 40)) {
        estado = textos[estado].siguiente[1]; 
      }
    }
    
  }
}
