class Message {
  constructor(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

// Cliente
const msg = new Message("hoje o dia está horrível");
console.log(msg.getText());
