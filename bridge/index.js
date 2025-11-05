// Implementação: Renderizadores (podem variar independente das formas)
class CanvasRenderer {
  renderShape(shape) {
    console.log(`Desenhando ${shape} no Canvas`);
  }
}

class SVGRenderer {
  renderShape(shape) {
    console.log(`Desenhando ${shape} em SVG`);
  }
}

// Abstração: Forma (usa um renderizador)
class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Circle extends Shape {
  draw() {
    this.renderer.renderShape("círculo");
  }
}

class Square extends Shape {
  draw() {
    this.renderer.renderShape("quadrado");
  }
}

// Cliente
const canvas = new CanvasRenderer();
const svg = new SVGRenderer();

const c1 = new Circle(canvas);
c1.draw();

const c2 = new Circle(svg);
c2.draw();

const s1 = new Square(canvas);
s1.draw();

const s2 = new Square(svg);
s2.draw();
