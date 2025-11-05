// Componentes simples
class Button {
  constructor(label) {
    this.label = label;
  }

  draw() {
    console.log(`Botão: [${this.label}]`);
  }
}

class Text {
  constructor(content) {
    this.content = content;
  }

  draw() {
    console.log(`Texto: "${this.content}"`);
  }
}

// Painel precisa saber o tipo de cada item manualmente
class Panel {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  render() {
    console.log(`Painel: ${this.name}`);
    this.children.forEach((child) => {
      if (child instanceof Button) {
        child.draw();
      } else if (child instanceof Text) {
        child.draw();
      } else if (child instanceof Panel) {
        child.render();
      }
    });
  }
}

// Cliente
const loginPanel = new Panel("Painel de Login");
loginPanel.add(new Text("Tela de Login"));
loginPanel.add(new Button("Entrar"));
loginPanel.add(new Button("Cancelar"));

const mainPanel = new Panel("Janela Principal");
mainPanel.add(loginPanel);
mainPanel.add(new Text("Versão 1.0.0"));

mainPanel.render();
