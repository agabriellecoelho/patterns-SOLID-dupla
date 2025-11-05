// Implementações duplicadas: cada forma + cada renderizador
class CircleCanvas {
  draw() {
    console.log("Desenhando círculo no Canvas");
  }
}

class CircleSVG {
  draw() {
    console.log("Desenhando círculo em SVG");
  }
}

class SquareCanvas {
  draw() {
    console.log("Desenhando quadrado no Canvas");
  }
}

class SquareSVG {
  draw() {
    console.log("Desenhando quadrado em SVG");
  }
}

// Cliente
const c1 = new CircleCanvas();
c1.draw();

const s1 = new SquareSVG();
s1.draw();
