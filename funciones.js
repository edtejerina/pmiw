function inicializar() {
  estado = 0;  // Inicializa el estado en 0

  const FINAL_VOLVER = [0, 0];  // Constante para los finales que reinician el juego

  textos[1] = crearTexto("Ralph está en su juego como cualquier otro día", ["Siguiente", "Siguiente"], [2, 2]);
  textos[2] = crearTexto("Ralph se da cuenta que quiere ser un héroe", ["Siguiente", "Siguiente"], [3, 3]);
  textos[3] = crearTexto("¿Quieres que Ralph busque una medalla de héroe?", ["Sí", "No"], [4, 5]);
  textos[4] = crearTexto("Ralph se va a buscar una medalla en otros juegos", ["Siguiente", "Siguiente"], [6, 6]);
  textos[6] = crearTexto("¿Decides entrar a Hero's Duty?", ["Sí", "No"], [7, 8]);
  textos[7] = crearTexto("Ralph llega a Hero's Duty donde hay una medalla de héroe, pero es muy peligroso", ["Siguiente", "Siguiente"], [9, 9]);
  textos[8] = crearTexto("Ralph decide entrar a Sugar Rush", ["Siguiente", "Siguiente"], [10, 10]);
  textos[9] = crearTexto("¿Enfrentas el peligro para conseguir la medalla?", ["Sí", "No"], [11, 12]);
  textos[10] = crearTexto("En Sugar Rush, Ralph conoce a Vanellope, una niña que también quiere ser aceptada", ["Siguiente", "Siguiente"], [15, 15]);
  textos[11] = crearTexto("Ralph lucha contra los enemigos", ["Siguiente", "Siguiente"], [13, 13]);
  textos[12] = crearTexto("Ralph se asusta y vuelve a su juego sin la medalla", ["Siguiente", "Siguiente"], [5, 5]);
  textos[13] = crearTexto("Gana y consigue la medalla", ["Siguiente", "Siguiente"], [14, 14]);
  textos[14] = crearTexto("Accidentalmente cae en Sugar Rush, un juego de carreras", ["Siguiente", "Siguiente"], [10, 10]);
  textos[15] = crearTexto("Vanellope le pide ayuda para competir en una carrera", ["Siguiente", "Siguiente"], [16, 16]);
  textos[16] = crearTexto("¿Ayudas a Vanellope a ganar la carrera?", ["Sí", "No"], [17, 18]);
  textos[17] = crearTexto("Ralph ayuda a Vanellope a construir su coche de carreras", ["Siguiente", "Siguiente"], [19, 19]);
  textos[18] = crearTexto("Ralph no la ayuda y Vanellope no puede correr", ["Siguiente", "Siguiente"], [20, 20]);

  // Finales
  textos[19] = crearTexto("Vanellope gana la carrera y Ralph obtiene su medalla", ["Volver", "Volver"], FINAL_VOLVER);
  textos[20] = crearTexto("Ralph obtiene su medalla, pero Vanellope nunca logra su sueño", ["Volver", "Volver"], FINAL_VOLVER);
  textos[5] = crearTexto("Ralph sigue siendo villano en su juego", ["Volver", "Volver"], FINAL_VOLVER);
}

function crearTexto(texto, opciones, siguiente) {
  return { texto, opciones, siguiente };
}

function pantallaInicio() {
  //Imagen de portada
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

function pantallaHistoria(escena) {
  image(imagenes[estado], 0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER); 
  stroke(0); //para que se pueda leer bien
  strokeWeight(3); //para que se pueda leer bien
  textSize(14);
  textFont(fuenteGenerica);
  text(escena.texto, width/2, height - 120);

  if (escena.opciones[0] === escena.opciones[1]) {
    dibujarBoton(escena.opciones[0], width/2, height - 40);
  } else {
    dibujarBoton(escena.opciones[0], width/3, height - 40);
    dibujarBoton(escena.opciones[1], 2 * width/3, height - 40);
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
  return (mouseX > x - w / 2 && mouseX < x + w / 2 &&
    mouseY > y - h / 2 && mouseY < y + h / 2);
}
