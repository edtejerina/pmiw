function inicializar() {
  estado = 0;
  
  textosHistoria[0] = "";
  opcion1[0] = "";
  opcion2[0] = "";
  siguiente1[0] = 0;
  siguiente2[0] = 0;

  for(let i = 0; i < contenidoTextos.length; i++) {
    textosHistoria[i + 1] = contenidoTextos[i];
  }

  configurarEscenas();
}

function configurarEscena(estado, opt1, opt2, sig1, sig2) {
  opcion1[estado] = opt1;
  opcion2[estado] = opt2;
  siguiente1[estado] = sig1;
  siguiente2[estado] = sig2;
}

function configurarEscenas() {
  configurarEscena(1, "Siguiente", "Siguiente", 2, 2);
  configurarEscena(2, "Siguiente", "Siguiente", 3, 3);
  configurarEscena(3, "Sí", "No", 4, 5);
  configurarEscena(4, "Siguiente", "Siguiente", 6, 6);
  configurarEscena(5, "Volver", "Volver", 0, 0);
  configurarEscena(6, "Sí", "No", 7, 8);
  configurarEscena(7, "Siguiente", "Siguiente", 9, 9);
  configurarEscena(8, "Siguiente", "Siguiente", 10, 10);
  configurarEscena(9, "Sí", "No", 11, 12);
  configurarEscena(10, "Siguiente", "Siguiente", 15, 15);
  configurarEscena(11, "Siguiente", "Siguiente", 13, 13);
  configurarEscena(12, "Siguiente", "Siguiente", 5, 5);
  configurarEscena(13, "Siguiente", "Siguiente", 14, 14);
  configurarEscena(14, "Siguiente", "Siguiente", 10, 10);
  configurarEscena(15, "Siguiente", "Siguiente", 16, 16);
  configurarEscena(16, "Sí", "No", 17, 18);
  configurarEscena(17, "Siguiente", "Siguiente", 19, 19);
  configurarEscena(18, "Siguiente", "Siguiente", 20, 20);
  configurarEscena(19, "Volver", "Volver", 0, 0);
  configurarEscena(20, "Volver", "Volver", 0, 0);
}

function pantallaInicio() {
  image(imagenes[0], 0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);
  strokeWeight(0);
  textSize(26);
  textFont(fuentePixel);
  text("Ralph El Demoledor", width/2, height/4);

  textSize(16);
  text("By Edgar Sardina Tejerina", width/2, height/2 - 40);

  dibujarBoton("Empezar", width/2, height*0.75);
  dibujarBoton("Creditos", width/2, height*0.75 + 60);
}

function pantallaCreditos() {
  image(imagenes[20], 0, 0, width, height);

  fill(255);
  textAlign(CENTER);
  strokeWeight(3);
  textSize(24); 
  textFont(fuenteGenerica);
  text("Créditos:", width/2, height/4);

  textSize(18); 
  text("Música: Owl City - When Can I See You Again?", width/2, height/4 + 105);

  dibujarBoton("Volver", width/2, height*0.75 + 60);
}

function pantallaHistoria(estadoActual) {
  image(imagenes[estadoActual], 0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER); 
  stroke(0);
  strokeWeight(3);
  textSize(14);
  textFont(fuenteGenerica);
  text(textosHistoria[estadoActual], width/2, height - 120);

  if (opcion1[estadoActual] === opcion2[estadoActual]) {
    dibujarBoton(opcion1[estadoActual], width/2, height - 40);
  } else {
    dibujarBoton(opcion1[estadoActual], width/3, height - 40);
    dibujarBoton(opcion2[estadoActual], 2 * width/3, height - 40);
  }
}

function dibujarBoton(texto, x, y) {
  push();
  fill(255, 140, 0);
  noStroke();
  rect(x - 80, y - 20, 160, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont(fuentePixel);
  textSize(14);
  text(texto, x, y);
  pop();
}

function colisionBoton(x, y, w, h) {
  return (mouseX > x - w/2 && mouseX < x + w/2 &&
          mouseY > y - h/2 && mouseY < y + h/2);
}
