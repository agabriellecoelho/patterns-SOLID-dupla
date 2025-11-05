class Notifier {
  send(message) {
    console.log("Enviando notificação:", message);
  }
}

const basic = new Notifier();
basic.send("Olá!");
