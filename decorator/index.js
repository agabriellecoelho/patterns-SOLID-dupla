// Componente base
class Notifier {
  send(message) {
    console.log("Notificação padrão:", message);
  }
}

// Decorator base
class NotifierDecorator {
  constructor(notifier) {
    this.notifier = notifier;
  }

  send(message) {
    this.notifier.send(message);
  }
}

// Decorator concreto: envia e-mail
class EmailNotifier extends NotifierDecorator {
  send(message) {
    super.send(message);
    console.log("Enviando e-mail:", message);
  }
}

// Decorator concreto: envia SMS
class SMSNotifier extends NotifierDecorator {
  send(message) {
    super.send(message);
    console.log("Enviando SMS:", message);
  }
}

// Cliente: empilha os decoradores
const notifier = new SMSNotifier(new EmailNotifier(new Notifier()));
notifier.send("Sistema atualizado com sucesso!");
