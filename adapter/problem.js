// Sistema interno espera isso:
class PaymentProcessor {
  processPayment(amount) {
    console.log(`Pagamento de R$${amount} processado.`);
  }
}

// Serviço externo de pagamento (incompatível)
class ExternalPaymentService {
  makeTransaction(value) {
    console.log(
      `Transação realizada no valor de R$${value} com serviço externo.`
    );
  }
}

// Cliente
function payOrder(processor, amount) {
  processor.processPayment(amount); // cliente espera este método
}

const processor = new PaymentProcessor();
payOrder(processor, 100);

// Tentando usar o serviço externo dá erro porque a interface não é compatível
const externalService = new ExternalPaymentService();
// payOrder(externalService, 200);
