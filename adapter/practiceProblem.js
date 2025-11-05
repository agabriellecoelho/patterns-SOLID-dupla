// Interface interna do sistema
class Notifier {
  send(message) {
    console.log(`Notificação enviada: ${message}`);
  }
}

// Biblioteca externa (incompatível com o sistema)
class SMSService {
  sendSMS(text) {
    console.log(`SMS enviado: ${text}`);
  }
}

// Cliente
function notifyUser(notifier, message) {
  notifier.send(message);
}

// Testando com o Notifier interno
const emailNotifier = new Notifier();
notifyUser(emailNotifier, "Bem-vindo ao sistema!");

// Tentando usar o SMSService diretamente (vai falhar)
const smsService = new SMSService();
// notifyUser(smsService, "Seu código é 1234");
