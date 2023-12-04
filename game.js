const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

// Crear una nueva imagen para la rana
const imgRana = new Image();
imgRana.src = 'Assets/frogger.png';

const imgCalle = new Image();
imgCalle.src = 'Assets/calle.png';

const imgMeta = new Image();
imgMeta.src = 'Assets/meta.png';

// Posición inicial de la rana
let xRana = (canvas.width - 35) / 2; // Posición horizontal inicial
let yRana = canvas.height - 35; // Posición vertical en la parte inferior
const imgWidthRana = 35; // Ancho de la imagen de la rana
const imgHeightRana = 35; // Altura de la imagen de la rana

// Posición de la calle
let xCalle = (canvas.width - 525) / 2; // Posición horizontal inicial
let yCalle = canvas.height - 50; // Posición vertical en la parte inferior
const imgWidthCalle = 530; // Ancho de la imagen de la rana
const imgHeightCalle = 50; // Altura de la imagen de la rana

// Posición de la meta
let xMeta = (canvas.width - 525) / 2; // Posición horizontal inicial
let yMeta = canvas.height - 380; // Posición vertical en la parte inferior
const imgWidthMeta = 530; // Ancho de la imagen de la rana
const imgHeightMeta = 50; // Altura de la imagen de la rana

// *** Obstaculos *** //

// ***** Carro 1 ***** //
const imgCarro1 = new Image();
imgCarro1.src = 'Assets/carro1.png';
const carroWidth1 = 56; // Ancho del carro 1
const carroHeight1 = 40; // Altura del carro 1

let velocidadCarro1 = 0.5;
let velocidadCarro2 = 0.8;
let velocidadCarro3 = 0.7;
let velocidadCarro4 = 1;
let velocidadCarro5 = 0.4;

const carrosX1 = [];
for (let i = 0; i < 5; i++) {
  carrosX1.push((i * (carroWidth1 + 105)) - carroWidth1);
}

function animateCarros1() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imgCalle, xCalle, yCalle, imgWidthCalle, imgHeightCalle); // Dibujo de la calle
  ctx.drawImage(imgMeta, xMeta, yMeta, imgWidthMeta, imgHeightMeta); // Dibujo de la calle
  ctx.drawImage(imgRana, xRana, yRana, imgWidthRana, imgHeightRana); // Dibujo de rana

  for (let i = 0; i < carrosX1.length; i++) {
    ctx.drawImage(imgCarro1, carrosX1[i], canvas.height - carroHeight1 - 50, carroWidth1, carroHeight1);  // Posición Y del carro
    carrosX1[i] -= velocidadCarro1; // Usar la variable de velocidad

    if (carrosX1[i] + carroWidth1 < 0) {
      carrosX1[i] = canvas.width + 220;
    }
  }
  requestAnimationFrame(animateCarros1);
}

animateCarros1();

// ***** Carro 2 ***** //
// Crear una nueva imagen para el segundo tipo de carro
const imgCarro2 = new Image();
imgCarro2.src = 'Assets/carro2.png';
const carroWidth2 = 56; // Ancho del carro 2
const carroHeight2 = 40; // Altura del carro 2

const carrosX2 = [];
// Definir las posiciones iniciales de los carros 2 en X
for (let i = 0; i < 5; i++) {
  carrosX2.push(canvas.width - ((i + 1) * (carroWidth2 + 200)));
}

// Función para animar los carros 2
function animateCarros2() {
  // Mover y dibujar cada carro 2 en el canvas
  for (let i = 0; i < carrosX2.length; i++) {
    ctx.drawImage(imgCarro2, carrosX2[i], canvas.height - 2 * carroHeight2 - 70, carroWidth2, carroHeight2); // Posición Y del carro
    carrosX2[i] += velocidadCarro2; // Usar la variable de velocidad

    // Si el carro sale del canvas, reiniciar su posición
    if (carrosX2[i] > canvas.width) {
      carrosX2[i] = -(carroWidth2 + 700); // Reposicionar el carro fuera del canvas
    }
  }
  requestAnimationFrame(animateCarros2); // Repetir la animación en cada cuadro
}

animateCarros2(); // Iniciar la animación de los carros 2 al cargar la página


// ***** Carro 3 ***** //
const imgCarro3 = new Image();
imgCarro3.src = 'Assets/carro3.png';
const carroWidth3 = 70; // Ancho del carro 3
const carroHeight3 = 40; // Altura del carro 3

const carrosX3 = [];
for (let i = 0; i < 5; i++) {
  carrosX3.push((i * (carroWidth3 + 100)) - carroWidth3);
}

function animateCarros3() {
  for (let i = 0; i < carrosX3.length; i++) {
    ctx.drawImage(imgCarro3, carrosX3[i], canvas.height - 3 * carroHeight3 - 85, carroWidth3, carroHeight3);  // Posición Y del carro
    carrosX3[i] -= velocidadCarro3; // Usar la variable de velocidad

    if (carrosX3[i] + carroWidth3 < 0) {
      carrosX3[i] = canvas.width + 250; // Distancia de la nueva fila
    }
  }
  requestAnimationFrame(animateCarros3);
}

animateCarros3();

// ***** Carro 4 ***** //
const imgCarro4 = new Image();
imgCarro4.src = 'Assets/carro4.png';
const carroWidth4 = 70; // Ancho del carro 4
const carroHeight4 = 40; // Altura del carro 4

const carrosX4 = [];
for (let i = 0; i < 5; i++) {
  carrosX4.push(canvas.width - ((i + 1) * (carroWidth4 + 250)));
}

function animateCarros4() {
  for (let i = 0; i < carrosX4.length; i++) {
    ctx.drawImage(imgCarro4, carrosX4[i], canvas.height - 4 * carroHeight4 - 100, carroWidth4, carroHeight4); // Posición Y del carro
    carrosX4[i] += velocidadCarro4; // Usar la variable de velocidad

    if (carrosX4[i] > canvas.width) {
      carrosX4[i] = -(carroWidth4 + 685); // Distancia de la nueva fila
    }
  }
  requestAnimationFrame(animateCarros4);
}

animateCarros4();

// ***** Carro 5 ***** //
const imgCarro5 = new Image();
imgCarro5.src = 'Assets/carro5.png';
const carroWidth5 = 90; // Ancho del carro 5
const carroHeight5 = 57; // Altura del carro 5

const carrosX5 = [];
for (let i = 0; i < 5; i++) {
  carrosX5.push((i * (carroWidth5 + 120)) - carroWidth5);
}

function animateCarros5() {
  for (let i = 0; i < carrosX5.length; i++) {
    ctx.drawImage(imgCarro5, carrosX5[i], canvas.height - 5 * carroHeight5 - 40, carroWidth5, carroHeight5);  // Posición Y del carro
    carrosX5[i] -= velocidadCarro5; // Usar la variable de velocidad

    if (carrosX5[i] + carroWidth5 < 0) {
      carrosX5[i] = canvas.width + 15; // Distancia de la nueva fila
    }
  }
  requestAnimationFrame(animateCarros5);
}

animateCarros5();

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(imgRana, xRana, yRana, imgWidthRana, imgHeightRana);

/// *** Colisiones *** ///

let puntaje = 0;
const scoreElement = document.getElementById('score');

// Llama a aumentarPuntaje cuando la rana colisione con la meta
function checkCollisionMeta() {
  const metaLeft = xMeta;
  const metaRight = xMeta + imgWidthMeta;
  const metaTop = yMeta;
  const metaBottom = yMeta + imgHeightMeta;

  if (
    xRana < metaRight &&
    xRana + imgWidthRana > metaLeft &&
    yRana < metaBottom &&
    yRana + imgHeightRana > metaTop
  ) {
    xRana = (canvas.width - imgWidthRana) / 2; // Volver a la posición horizontal inicial
    yRana = canvas.height - imgHeightRana; // Volver a la posición vertical inicial
    aumentarPuntaje(); // Aumentar el puntaje
  }
  requestAnimationFrame(checkCollisionMeta);
}

checkCollisionMeta(); // Iniciar la función de verificación de colisión para la meta

function reiniciarJuego() {
  alert('¡Juego terminado!');
  // Recargar la página actual
  window.location.reload();
}

function reducirVida() {
  vidas--;
  vidasElement.textContent = `Lives: ${vidas} 💚`;

  if (vidas === 0) {
    reiniciarJuego();
  }
}
let vidas = 3;
const vidasElement = document.getElementById('vidas');

function aumentarPuntaje() {
  puntaje++;
  scoreElement.textContent = `Score: ${puntaje}`;
  // Verificar si el puntaje es un múltiplo de X
  if (puntaje % 2 === 0) {
    aumentarVelocidadCarros();
  }
}

function aumentarVelocidadCarros() {
  velocidadCarro1 *= 1.5;
  velocidadCarro2 *= 1.5;
  velocidadCarro3 *= 1.5;
  velocidadCarro4 *= 1.5;
  velocidadCarro5 *= 1.5;
}

// Función para verificar la colisión entre la rana y carro 1
function checkCollision() {
  // Carro 1
  for (let i = 0; i < carrosX1.length; i++) {
    if (
      xRana < carrosX1[i] + carroWidth1 &&
      xRana + imgWidthRana > carrosX1[i] &&
      yRana < canvas.height - carroHeight1 &&
      yRana + imgHeightRana > canvas.height - carroHeight1 - 50
    ) {
      xRana = (canvas.width - imgWidthRana) / 2; // Volver a la posición inicial
      yRana = canvas.height - imgHeightRana; // Volver a la posición inicial
      reducirVida();
      break;
    }
  }
  // Repetir la función cada cierto tiempo para verificar la colisión en cada fotograma
  requestAnimationFrame(checkCollision);
}
checkCollision(); // Iniciar la función de verificación de colisión

// Función para verificar la colisión entre la rana y el carro 2
function checkCollisionCarro2() {
  for (let i = 0; i < carrosX2.length; i++) {
    // Ajustar los límites de colisión para el carro 2
    const carro2Left = carrosX2[i] + 5;
    const carro2Right = carrosX2[i] + carroWidth2 - 5;
    const carro2Top = canvas.height - 2 * carroHeight2 - 65;
    const carro2Bottom = canvas.height - 2 * carroHeight2 + carroHeight2 - 80; // Choque desde abajo

    if (
      xRana < carro2Right &&
      xRana + imgWidthRana > carro2Left &&
      yRana < carro2Bottom &&
      yRana + imgHeightRana > carro2Top
    ) {
      // Ajustar la posición de la rana en caso de colisión con el carro 2
      xRana = (canvas.width - imgWidthRana) / 2; // Volver a la posición horizontal inicial
      yRana = canvas.height - imgHeightRana; // Volver a la posición vertical inicial
      reducirVida();
      break;
    }
  }
  requestAnimationFrame(checkCollisionCarro2);
}
checkCollisionCarro2(); // Iniciar la función de verificación de colisión para el carro 2

// Función para verificar la colisión entre la rana y el carro 3
function checkCollisionCarro3() {
  for (let i = 0; i < carrosX3.length; i++) {
    // Ajustar los límites de colisión para el carro 3
    const carro3Left = carrosX3[i] + 5; // Lado izquierdo
    const carro3Right = carrosX3[i] + carroWidth3 - 10;
    const carro3Top = canvas.height - 3 * carroHeight3 - 85 + 10;
    const carro3Bottom = canvas.height - 3 * carroHeight3 - 85 + carroHeight3 - 10;

    if (
      xRana < carro3Right &&
      xRana + imgWidthRana > carro3Left &&
      yRana < carro3Bottom &&
      yRana + imgHeightRana > carro3Top
    ) {
      // Ajustar la posición de la rana en caso de colisión con el carro 3
      xRana = (canvas.width - imgWidthRana) / 2; // Volver a la posición horizontal inicial
      yRana = canvas.height - imgHeightRana; // Volver a la posición vertical inicial
      reducirVida();
      break;
    }
  }
  requestAnimationFrame(checkCollisionCarro3);
}
checkCollisionCarro3(); // Iniciar la función de verificación de colisión para el carro 3

// Función para verificar la colisión entre la rana y el carro 4
function checkCollisionCarro4() {
  for (let i = 0; i < carrosX4.length; i++) {
    // Ajustar los límites de colisión para el carro 4
    const carro4Left = carrosX4[i] + 5;
    const carro4Right = carrosX4[i] + carroWidth4 - 5;
    const carro4Top = canvas.height - 4 * carroHeight4 - 100 + 10;
    const carro4Bottom = canvas.height - 4 * carroHeight4 - 100 + carroHeight4 - 10;

    if (
      xRana < carro4Right &&
      xRana + imgWidthRana > carro4Left &&
      yRana < carro4Bottom &&
      yRana + imgHeightRana > carro4Top
    ) {
      // Ajustar la posición de la rana en caso de colisión con el carro 4
      xRana = (canvas.width - imgWidthRana) / 2; // Volver a la posición horizontal inicial
      yRana = canvas.height - imgHeightRana; // Volver a la posición vertical inicial
      reducirVida();
      break;
    }
  }
  requestAnimationFrame(checkCollisionCarro4);
}
checkCollisionCarro4(); // Iniciar la función de verificación de colisión para el carro 4

// Función para verificar la colisión entre la rana y el carro 5
function checkCollisionCarro5() {
  for (let i = 0; i < carrosX5.length; i++) {
    // Ajustar los límites de colisión para el carro 5
    const carro5Left = carrosX5[i] + 5;
    const carro5Right = carrosX5[i] + carroWidth5 - 5;
    const carro5Top = canvas.height - 5 * carroHeight5 - 40 + 15;
    const carro5Bottom = canvas.height - 5 * carroHeight5 - 40 + carroHeight5 - 15;

    if (
      xRana < carro5Right &&
      xRana + imgWidthRana > carro5Left &&
      yRana < carro5Bottom &&
      yRana + imgHeightRana > carro5Top
    ) {
      // Ajustar la posición de la rana en caso de colisión con el carro 5
      xRana = (canvas.width - imgWidthRana) / 2; // Volver a la posición horizontal inicial
      yRana = canvas.height - imgHeightRana; // Volver a la posición vertical inicial
      reducirVida();
      break;
    }
  }
  requestAnimationFrame(checkCollisionCarro5);
}
checkCollisionCarro5(); // Iniciar la función de verificación de colisión para el carro 5

  // MOVIMIENTO DE LA RANA //

  const leftButton = document.getElementById('leftButton');
const upButton = document.getElementById('upButton');
const rightButton = document.getElementById('rightButton');
const downButton = document.getElementById('downButton');

leftButton.addEventListener('click', () => moveRana('left'));
upButton.addEventListener('click', () => moveRana('up'));
rightButton.addEventListener('click', () => moveRana('right'));
downButton.addEventListener('click', () => moveRana('down'));

function moveRana(direction) {
  switch (direction) {
    case 'left':
      if (xRana - moveDistanceX >= 0) {
        xRana -= moveDistanceX;
      }
      break;
    case 'up':
      if (yRana - moveDistanceY >= 0) {
        yRana -= moveDistanceY;
      }
      break;
    case 'right':
      if (xRana + imgWidthRana + moveDistanceX <= canvas.width) {
        xRana += moveDistanceX;
      }
      break;
    case 'down':
      if (yRana + imgHeightRana + moveDistanceY <= canvas.height) {
        yRana += moveDistanceY;
      }
      break;
  }
}
  
  let moveDistanceX = 40; // Distancia de movimiento horizontal
  let moveDistanceY = 55; // Distancia de movimiento vertical
  
  document.addEventListener('keydown', function(event) {
    event.preventDefault();
    
    switch(event.keyCode) {
      case 37: // Flecha izquierda
        if (xRana - moveDistanceX >= 0) {
          xRana -= moveDistanceX;
        }
        break;
      case 39: // Flecha derecha
        if (xRana + imgWidthRana + moveDistanceX <= canvas.width) {
          xRana += moveDistanceX;
        }
        break;
      case 38: // Flecha arriba
        if (yRana - moveDistanceY >= 0) {
          yRana -= moveDistanceY;
        }
        break;
      case 40: // Flecha abajo
        if (yRana + imgHeightRana + moveDistanceY <= canvas.height) {
          yRana += moveDistanceY;
        }
        break;
    }
  });