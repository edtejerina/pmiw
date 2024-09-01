//Edgar Sardina Tejerina 119143/7
//Video explicativo: https://youtu.be/RRpTG2aJwOU
let obra;
let filas;
let pasos;
let colorOscuro; // color oscuro
let colorClaro;  // color claro

function preload() {
  obra = loadImage("data/obra.png");
}

function setup() {
  createCanvas(800, 400); 
  noStroke();
  colorOscuro = color(31);
  colorClaro = color(240);
  filas = 12;
  pasos = 22;
  generarGrilla();
}

function draw() {
  image(obra, 0, 0, 400, 400);
}

function generarGrilla() {
  let centro = int(random(width / 2, width)); // centro aleatorio dentro del lado derecho
  let posicionDerecha = centro;
  let posicionIzquierda = centro;

  // Lado derecho
  for (let contador = 0; posicionDerecha < width; contador++) {
    let anchoColumna = calcularAnchoColumna(pasos, contador);
    dibujarColumna(posicionDerecha, anchoColumna, contador);
    posicionDerecha += anchoColumna;
  }

  // Lado izquierdo
  for (let contador = 0; posicionIzquierda > width / 2; contador++) {
    let anchoColumna = calcularAnchoColumna(pasos, contador + 1); // +1 para empezar desde el segundo lado
    dibujarColumna(posicionIzquierda - anchoColumna, anchoColumna, contador + 1);
    posicionIzquierda -= anchoColumna;
  }
}

function dibujarColumna(x, w, i) {
  let alturaColumna = height / filas;
  for (let j = 0; j < height; j += alturaColumna) {
    if ((i + j / alturaColumna) % 2 === 0) {
      fill(colorClaro);
    } else {
      fill(colorOscuro);
    }
    rect(x, j, w, alturaColumna);
  }
}

function reiniciarVariables() {
  filas = int(random(10, 20));
  pasos = int(random(6, 24));
}

function calcularAnchoColumna(pasos, contador) {
  let anchoCompleto = height / filas;
  return anchoCompleto / (max(pasos - contador, 0) + 1);
}

function mouseClicked() {
  reiniciarVariables();
  generarGrilla();
}
